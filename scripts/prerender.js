/**
 * Post-build SEO step. Runs automatically after `npm run build`.
 *
 * Create React App ships a single index.html whose <body> is an empty <div id="root">.
 * Googlebot can execute JavaScript, but it does so on a second, slower pass and
 * with no guarantee — and other crawlers (Bing, LinkedIn, Facebook, Telegram,
 * X) mostly don't execute it at all. So every route looked identical: same
 * title, same "enable JavaScript" body.
 *
 * This script writes one static HTML file per route:
 *   build/index.html, build/skillset/index.html, build/project/index.html, ...
 *
 * Each gets that route's real title/description/canonical/OG tags, plus a
 * human-readable copy of the page's content inside #root. React replaces those
 * children the moment it mounts, so users see the normal app; crawlers and
 * users on a failed/slow JS load see real text. It is the same content either
 * way — no hidden text, no cloaking.
 *
 * It also emits sitemap.xml with a current lastmod for each route.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "build");

// --- load the shared SEO config (an ES module) from plain CommonJS ---------
function loadSiteConfig() {
  const src = fs.readFileSync(
    path.join(ROOT, "src", "seo", "siteConfig.js"),
    "utf8"
  );
  const cjs = src
    .replace(/^export \{[^}]*\};?$/m, "")
    .replace(/^export default siteConfig;?$/m, "module.exports = siteConfig;");
  const tmp = path.join(ROOT, "node_modules", ".siteConfig.generated.cjs");
  fs.writeFileSync(tmp, cjs);
  delete require.cache[require.resolve(tmp)];
  const cfg = require(tmp);
  fs.unlinkSync(tmp);
  return cfg;
}

const { SITE_URL, ROUTES, DEFAULT_OG_IMAGE } = loadSiteConfig();

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// --- rewrite the <head> for one route -------------------------------------
function applyMeta(html, meta) {
  const url = SITE_URL + meta.path;
  const image = SITE_URL + DEFAULT_OG_IMAGE;
  const title = esc(meta.title);
  const desc = esc(meta.description);

  // Rebuild whole tags, matched by their identifying attribute, so this keeps
  // working if attribute order in index.html ever changes. data-rh="true" hands
  // each tag over to react-helmet-async once React mounts — without it, Helmet
  // appends a second <title>/canonical on client-side navigation instead of
  // replacing the static one.
  const setMeta = (ident, attrs) => {
    const re = new RegExp(`<meta[^>]*${ident.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^>]*>`);
    if (re.test(html)) html = html.replace(re, `<meta data-rh="true" ${attrs}/>`);
    else console.warn(`[prerender] no tag matched ${ident}`);
  };

  html = html.replace(
    /<title[^>]*>[\s\S]*?<\/title>/,
    `<title data-rh="true">${title}</title>`
  );

  const canonRe = /<link[^>]*rel="canonical"[^>]*>/;
  if (canonRe.test(html)) {
    html = html.replace(
      canonRe,
      `<link data-rh="true" rel="canonical" href="${url}"/>`
    );
  }

  setMeta('name="description"', `name="description" content="${desc}"`);
  setMeta('name="keywords"', `name="keywords" content="${esc(meta.keywords)}"`);
  setMeta('property="og:title"', `property="og:title" content="${title}"`);
  setMeta(
    'property="og:description"',
    `property="og:description" content="${desc}"`
  );
  setMeta('property="og:url"', `property="og:url" content="${url}"`);
  setMeta('property="og:image"', `property="og:image" content="${image}"`);
  setMeta('name="twitter:title"', `name="twitter:title" content="${title}"`);
  setMeta(
    'name="twitter:description"',
    `name="twitter:description" content="${desc}"`
  );
  setMeta('name="twitter:image"', `name="twitter:image" content="${image}"`);

  return html;
}

// --- text fallback for clients that don't run JavaScript -----------------
//
// This used to be injected into #root so it rendered as real DOM. That was a
// mistake: the browser painted it as unstyled text for the ~1.5s before React
// mounted, so every page load flashed a wall of plain HTML, and its <a> tags
// were live during that window — clicking one triggered a full page reload
// instead of client-side routing.
//
// It lives in <noscript> now. Users never see it. Crawlers that don't execute
// JavaScript still get real text instead of "You need to enable JavaScript",
// and the ones that matter most for ranking (Google, Bing) execute JS and see
// the actual app. The head metadata — title, description, canonical, Open
// Graph, JSON-LD — is what carries the real SEO weight, and that is unchanged.
function applyBody(html, meta) {
  const nav = Object.values(ROUTES)
    .map((r) => `<li><a href="${r.path}">${esc(r.heading)}</a></li>`)
    .join("");

  const body =
    `<h1>${esc(meta.heading)}</h1>` +
    meta.body.map((p) => `<p>${esc(p)}</p>`).join("") +
    `<nav aria-label="Site"><ul>${nav}</ul></nav>`;

  // Leave #root empty so nothing paints before React takes over.
  return html.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript>${body}</noscript>`
  );
}

// --------------------------------------------------------------------------
function run() {
  const shellPath = path.join(BUILD, "index.html");
  if (!fs.existsSync(shellPath)) {
    console.error("[prerender] build/index.html not found — run the build first.");
    process.exit(1);
  }
  const shell = fs.readFileSync(shellPath, "utf8");

  const written = [];
  for (const meta of Object.values(ROUTES)) {
    const html = applyBody(applyMeta(shell, meta), meta);
    const dir =
      meta.path === "/" ? BUILD : path.join(BUILD, meta.path.replace(/^\//, ""));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
    written.push(meta.path);
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    Object.values(ROUTES)
      .map(
        (r) =>
          `  <url>\n` +
          `    <loc>${SITE_URL}${r.path}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>\n` +
          `  </url>`
      )
      .join("\n") +
    `\n</urlset>\n`;
  fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);

  console.log(`[prerender] wrote ${written.length} routes: ${written.join(", ")}`);
  console.log(`[prerender] wrote sitemap.xml (lastmod ${today})`);
}

run();

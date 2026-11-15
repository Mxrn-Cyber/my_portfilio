// Send visitors (and Google) from the old Cloudflare address to the custom
// domain with a permanent 301, keeping the path and query.
// Preview deploys like abc123.myportfolio-7s0.pages.dev are left alone.
const OLD_HOST = "myportfolio-7s0.pages.dev";
const NEW_ORIGIN = "https://laothomorn-portfolio.site";

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === OLD_HOST) {
    return Response.redirect(NEW_ORIGIN + url.pathname + url.search, 301);
  }
  return next();
}

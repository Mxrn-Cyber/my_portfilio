# Mxrn Cyber — Portfolio

Personal portfolio of **Lao Thomorn (Mxrn Cyber)**, a full-stack web developer, UI/UX designer and ICT teacher based in Siem Reap, Cambodia.

**Live site:** [myportfolio-7s0.pages.dev](https://myportfolio-7s0.pages.dev/)

## Features

- **3D hero**: a three.js scene of floating "hacking tools" (a laptop with a live terminal, a padlock, a USB stick and a `>_` tile) that follows the mouse and scroll
- **Hacker mode**: hover or tap the portrait and it switches to a hooded-hacker avatar
- **Lime-on-black theme** with light and dark modes
- **English and Khmer** throughout
- **Bento-grid About section**, a Focus list with scrolling tech names, and project cards that tilt in 3D
- **Live Siem Reap clock** in the footer
- **SEO**: each route is pre-rendered with its own title, description, Open Graph tags and structured data, plus a sitemap
- **Performance**:
  - three.js loads lazily
  - animations pause when off screen
  - the 3D scene is skipped on phones
  - a "lite" mode turns on automatically for weak GPUs
  - all animations respect reduced-motion settings

## Tech stack

| Area      | Tools                                                              |
| --------- | ------------------------------------------------------------------ |
| Framework | React 18 (Create React App), React Router 6                        |
| UI        | React-Bootstrap, custom CSS (design tokens in `src/style.css`)     |
| 3D/motion | three.js, react-parallax-tilt, tsparticles, typewriter-effect      |
| Content   | react-pdf (resume viewer), react-helmet-async (SEO tags)           |
| Contact   | Web3Forms                                                          |
| Hosting   | Cloudflare Pages, deployed by GitHub Actions                       |

## Getting started

You need Node.js 18 or newer.

```bash
git clone https://github.com/Mxrn-Cyber/my_portfilio.git
cd my_portfilio
npm install
npm start          # http://localhost:3000
```

| Command         | What it does                                                        |
| --------------- | ------------------------------------------------------------------- |
| `npm start`     | Runs the dev server with hot reload                                 |
| `npm run build` | Builds to `build/`, then pre-renders each route and writes `sitemap.xml` |
| `npm test`      | Runs the test runner                                                |

Add `?perf=full` or `?perf=lite` to the URL to force a performance mode while testing.

## Project structure

```
public/
  index.html            # base HTML, meta tags, structured data
  hacker-avatar.svg     # hover avatar (animated SVG)
scripts/
  prerender.js          # post-build: per-route HTML + sitemap
src/
  pages/                # Home, Skillset, Projects, Resume, Contact
  components/
    Home/               # Hero3D, HeroSwap, Focus, About, Type
    Common/             # Reveal (scroll animation), SectionLabel
    Navbar/ Footer/ Projects/ Skillset/ Contact/
  context/              # ThemeContext, LanguageContext
  translations/         # en.js, km.js — all page text
  seo/                  # siteConfig.js (titles, descriptions), Seo.jsx
  perf.js               # weak-GPU detection ("lite" mode)
  style.css             # design tokens + all main styles
```

## Customizing

- **Text**: edit `src/translations/en.js` and `src/translations/km.js`.
- **Colors**: change the tokens at the top of `src/style.css` (`--accent`, `--bg`, and so on).
- **Projects**: edit the list in `src/pages/Projects.jsx`. Each project's text lives under `projects.items` in the translation files.
- **SEO and domain**: edit `src/seo/siteConfig.js`. To move to a custom domain, change `SITE_URL` there.
- **Resume**: replace `src/assets/Lao-Thomorn-CV.pdf`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys `build/` to Cloudflare Pages.

It needs two repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

## Author

**Lao Thomorn — Mxrn Cyber**

- GitHub: [@Mxrn-Cyber](https://github.com/Mxrn-Cyber)
- LinkedIn: [Lao Thomorn](https://www.linkedin.com/in/lao-thomorn-347a4b28b/)
- Figma: [@CyberMorn](https://www.figma.com/@CyberMorn)

If you like this project, give it a ⭐ on GitHub.

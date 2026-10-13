<div align="center">

<a href="https://myportfolio-7s0.pages.dev/">
  <img src="docs/banner.svg" alt="Mxrn Cyber — Lao Thomorn, Full-Stack Web Developer" width="100%" />
</a>

<br />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&pause=1200&color=C6FF3D&center=true&vCenter=true&width=620&lines=%24+whoami;Full-Stack+Web+Developer+%C2%B7+UI%2FUX+Designer;ICT+Teacher+in+Siem+Reap%2C+Cambodia;%3E+access+granted_" alt="Typing intro" />

<br />

<a href="https://myportfolio-7s0.pages.dev/"><img src="https://img.shields.io/badge/LIVE_SITE-VISIT_%E2%86%97-c6ff3d?style=for-the-badge&labelColor=0a0a0a" alt="Live site" /></a>
<a href="https://github.com/Mxrn-Cyber/my_portfilio/stargazers"><img src="https://img.shields.io/github/stars/Mxrn-Cyber/my_portfilio?style=for-the-badge&color=c6ff3d&labelColor=0a0a0a&logo=github&logoColor=c6ff3d" alt="Stars" /></a>
<img src="https://img.shields.io/badge/React-18-c6ff3d?style=for-the-badge&labelColor=0a0a0a&logo=react&logoColor=c6ff3d" alt="React 18" />
<img src="https://img.shields.io/badge/three.js-3D-c6ff3d?style=for-the-badge&labelColor=0a0a0a&logo=threedotjs&logoColor=c6ff3d" alt="three.js" />
<img src="https://img.shields.io/badge/Cloudflare-Pages-c6ff3d?style=for-the-badge&labelColor=0a0a0a&logo=cloudflare&logoColor=c6ff3d" alt="Cloudflare Pages" />

<br /><br />

**[Live demo](https://myportfolio-7s0.pages.dev/)** · **[Features](#-features)** · **[Quick start](#-quick-start)** · **[Customize](#-customize)** · **[Deploy](#-deploy)**

</div>

<br />

## 🖥️ Preview

<p align="center">
  <img src="docs/preview-dark.webp" alt="Hero section in dark mode with the 3D hacking-tools scene" width="100%" />
</p>

<table>
  <tr>
    <td width="50%"><img src="docs/preview-light.webp" alt="Hero in light mode" /></td>
    <td width="50%"><img src="docs/preview-about.webp" alt="Bento-grid About section" /></td>
  </tr>
  <tr>
    <td align="center"><sub><b>Light mode</b></sub></td>
    <td align="center"><sub><b>Bento-grid About section</b></sub></td>
  </tr>
</table>

<br />

## ✨ Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>🧊 3D hacking-tools hero</h4>
      A three.js scene with a laptop running a live terminal, a padlock, a USB stick and a <code>&gt;_</code> tile. It follows your mouse and scroll.
    </td>
    <td width="50%" valign="top">
      <h4>🕶️ Hacker mode</h4>
      Hover or tap the portrait and it opens into a hooded-hacker avatar with glowing code glasses.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h4>🌗 Lime on black</h4>
      Light and dark themes from one set of color tokens. The site matches your OS setting and remembers your choice.
    </td>
    <td valign="top">
      <h4>🇰🇭 English + Khmer</h4>
      Every line of text is translated, and you can switch language with one tap.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h4>🍱 Modern sections</h4>
      Bento-grid About with a cursor spotlight, a scrolling Focus list, 3D-tilt project cards and a live Siem Reap clock.
    </td>
    <td valign="top">
      <h4>🔎 SEO-ready</h4>
      Every route is pre-rendered with its own title, description, Open Graph tags and structured data. A sitemap is built automatically.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h4>⚡ Fast by default</h4>
      three.js loads lazily, animations pause when off screen, and a "lite" mode turns on automatically for weak GPUs.
    </td>
    <td valign="top">
      <h4>♿ Accessible</h4>
      Keyboard-friendly controls and alt text on images. All motion respects <code>prefers-reduced-motion</code>.
    </td>
  </tr>
</table>

<br />

## 🧰 Tech stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,js,threejs,bootstrap,css,nodejs,figma,cloudflare,githubactions&theme=dark" alt="React, JavaScript, three.js, Bootstrap, CSS, Node.js, Figma, Cloudflare, GitHub Actions" />
</p>

| Layer       | Tools                                                         |
| :---------- | :------------------------------------------------------------ |
| Framework   | React 18 · Create React App · React Router 6                  |
| Styling     | React-Bootstrap · custom CSS design tokens                    |
| Motion & 3D | three.js · react-parallax-tilt · tsparticles · typewriter-effect |
| Content     | react-pdf (resume viewer) · react-helmet-async (SEO)          |
| Contact     | Web3Forms                                                     |
| Hosting     | Cloudflare Pages · GitHub Actions                             |

<br />

## 🚀 Quick start

> Requires **Node.js 18+**

```bash
git clone https://github.com/Mxrn-Cyber/my_portfilio.git
cd my_portfilio
npm install
npm start
```

Open **http://localhost:3000**.

| Command         | Description                                                      |
| :-------------- | :--------------------------------------------------------------- |
| `npm start`     | Dev server with hot reload                                       |
| `npm run build` | Production build, then pre-renders every route and writes the sitemap |
| `npm test`      | Runs the tests                                                   |

> [!TIP]
> To force a performance mode while testing, add `?perf=full` or `?perf=lite` to the URL.

<br />

## 🗂️ Project structure

<details>
<summary><b>Show the folder tree</b></summary>

```text
.
├── docs/                    # README banner + screenshots
├── public/
│   ├── index.html           # base HTML, meta tags, structured data
│   └── hacker-avatar.svg    # animated hover avatar
├── scripts/
│   └── prerender.js         # post-build: per-route HTML + sitemap.xml
└── src/
    ├── pages/               # Home · Skillset · Projects · Resume · Contact
    ├── components/
    │   ├── Home/            # Hero3D · HeroSwap · Focus · About · Type
    │   ├── Common/          # Reveal (scroll animation) · SectionLabel
    │   └── Navbar/ Footer/ Projects/ Skillset/ Contact/
    ├── context/             # ThemeContext · LanguageContext
    ├── translations/        # en.js · km.js (all page text)
    ├── seo/                 # siteConfig.js · Seo.jsx
    ├── perf.js              # weak-GPU detection ("lite" mode)
    └── style.css            # design tokens + main styles
```

</details>

<br />

## 🎨 Customize

| To change…     | Edit                                                                    |
| :------------- | :---------------------------------------------------------------------- |
| Text (EN / KM) | `src/translations/en.js` · `src/translations/km.js`                     |
| Colors         | the tokens at the top of `src/style.css` (`--accent`, `--bg`, …)        |
| Projects       | the list in `src/pages/Projects.jsx` and `projects.items` in the translation files |
| SEO / domain   | `src/seo/siteConfig.js` (change `SITE_URL` for a custom domain)         |
| Resume         | replace `src/assets/Lao-Thomorn-CV.pdf`                                 |

<br />

## ☁️ Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `build/` to **Cloudflare Pages**.

Add these two repository secrets first:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

<br />

## 👋 Author

<div align="center">

**Lao Thomorn — Mxrn Cyber**
<br />
<sub>Full-Stack Web Developer · UI/UX Designer · ICT Teacher · Siem Reap, Cambodia</sub>

<br /><br />

<a href="https://github.com/Mxrn-Cyber"><img src="https://img.shields.io/badge/GitHub-0a0a0a?style=for-the-badge&logo=github&logoColor=c6ff3d" alt="GitHub" /></a>
<a href="https://www.linkedin.com/in/lao-thomorn-347a4b28b/"><img src="https://img.shields.io/badge/LinkedIn-0a0a0a?style=for-the-badge&logo=linkedin&logoColor=c6ff3d" alt="LinkedIn" /></a>
<a href="https://www.figma.com/@CyberMorn"><img src="https://img.shields.io/badge/Figma-0a0a0a?style=for-the-badge&logo=figma&logoColor=c6ff3d" alt="Figma" /></a>
<a href="https://x.com/cybermorn"><img src="https://img.shields.io/badge/X-0a0a0a?style=for-the-badge&logo=x&logoColor=c6ff3d" alt="X" /></a>

<br /><br />

<sub>If this project helped or inspired you, leave a ⭐ — it means a lot.</sub>

</div>

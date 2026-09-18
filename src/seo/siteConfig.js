// Single source of truth for everything search engines and social platforms read.
//
// Both the runtime <Seo /> component and the build-time prerender script
// (scripts/prerender.js) read this file, so route metadata never drifts between
// what users get client-side and what Googlebot gets in the raw HTML.
//
// If you move to a custom domain, change SITE_URL here and nothing else.

const SITE_URL = "https://myportfolio-7s0.pages.dev";

const PERSON = {
  name: "Lao Thomorn",
  alternateName: "Cyber-Mxrn",
  jobTitle: "Full-Stack Web Developer & ICT Teacher",
  location: "Siem Reap, Cambodia",
  alumniOf: "Royal University of Phnom Penh",
  email: "thomorn@pepyempoweringyouth.org",
  sameAs: ["https://github.com/Mxrn-Cyber"],
};

// Keep titles under ~60 characters and descriptions between 140-160 so Google
// shows them whole instead of truncating with an ellipsis.
const ROUTES = {
  home: {
    path: "/",
    title: "Lao Thomorn — Full-Stack Web Developer in Siem Reap, Cambodia",
    description:
      "Portfolio of Lao Thomorn (Cyber-Mxrn), a full-stack web developer and ICT teacher in Siem Reap, Cambodia. React, Node.js, Laravel, FastAPI and UI/UX design work.",
    keywords:
      "Lao Thomorn, Cyber-Mxrn, full-stack developer Cambodia, web developer Siem Reap, React developer Cambodia, ICT teacher, UI UX designer Cambodia",
    heading: "Lao Thomorn — Full-Stack Web Developer & ICT Teacher",
    body: [
      "Welcome to my portfolio. I'm Lao Thomorn, also known as Cyber-Mxrn, a full-stack web developer, UI/UX designer and ICT teacher based in Siem Reap, Cambodia.",
      "I hold a Bachelor's Degree in Information Technology Engineering from the Royal University of Phnom Penh. I build modern, responsive web applications with React.js, Node.js, Vue.js, Laravel, FastAPI, MongoDB and MySQL.",
      "Alongside teaching practical ICT and digital skills to young people, I work as a freelance full-stack developer and study cybersecurity, ethical hacking and web security.",
    ],
  },
  skillset: {
    path: "/skillset",
    title: "Skills & Tools — Lao Thomorn | React, Node.js, Laravel",
    description:
      "The languages, frameworks and tools Lao Thomorn works with: React.js, Vue.js, Node.js, Laravel, FastAPI, Python, MongoDB, MySQL, Tailwind CSS, Git and more.",
    keywords:
      "Lao Thomorn skills, React developer skills, Node.js, Laravel, FastAPI, Python, MongoDB, Tailwind CSS, Cambodia developer",
    heading: "Professional Skillset & Tools",
    body: [
      "Languages and frameworks: C, C++, Python, HTML, CSS, JavaScript, Sass, Node.js, React.js, Vue.js, PHP, Laravel, Flask and FastAPI.",
      "Databases and platforms: MySQL, MongoDB, SQLite, Firebase and Supabase.",
      "Tools and workflow: Git, GitHub, Tailwind CSS, Vite, Postman and REST APIs, with additional knowledge of Java, GraphQL and Solidity.",
      "Focus areas: full-stack web development, responsive UI/UX design, cybersecurity and technical support.",
    ],
  },
  project: {
    path: "/project",
    title: "Projects — Web Apps & UI/UX Work by Lao Thomorn",
    description:
      "Selected projects by Lao Thomorn: e-commerce sites, a Vue.js and Laravel teaching platform, FastAPI services, Figma UI/UX concepts and client websites built with React.",
    keywords:
      "Lao Thomorn projects, React portfolio projects, Vue Laravel project, FastAPI project, Figma UI UX Cambodia, web development portfolio",
    heading: "Recent Top Works",
    body: [
      "A few of the projects I've worked on recently, across web development and UI/UX design.",
      "TheWalk — an e-commerce website for buying shoes online, built during my first semester of Year 3.",
      "Teacher Assistant — a web platform built with a five-person team using Vue.js integrated with the Laravel framework.",
      "ReanPhysic — a client business website built with React.js and Tailwind CSS, hosted on Cloudflare and Render.",
      "Meakutes Khmer — a site for finding places to visit in Cambodia, with the UI/UX complete.",
      "FastAPI Project — a Year 2 programming assignment built with FastAPI.",
      "KroeungTes and TheWalk Figma concepts — mobile and web UI/UX design work.",
      "Car3D Game — a C++ project, and this portfolio website itself, built with React.js.",
    ],
  },
  resume: {
    path: "/resume",
    title: "Resume / CV — Lao Thomorn, Full-Stack Developer",
    description:
      "View and download the resume of Lao Thomorn: Bachelor of Information Technology Engineering from RUPP, ICT teacher and freelance full-stack developer in Siem Reap.",
    keywords:
      "Lao Thomorn resume, Lao Thomorn CV, IT engineering RUPP, developer CV Cambodia, ICT teacher resume",
    heading: "Resume",
    body: [
      "Lao Thomorn — Bachelor's Degree in Information Technology Engineering, Royal University of Phnom Penh.",
      "Currently an ICT Teacher at an organization in Siem Reap, teaching young people practical ICT and digital skills, and developing learning materials, assessments and ICT activities.",
      "Also working as a freelance full-stack developer, building and improving web applications.",
      "The full resume is available to preview and download as a PDF on this page.",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact Lao Thomorn — Hire a Web Developer in Cambodia",
    description:
      "Get in touch with Lao Thomorn for freelance full-stack web development, UI/UX design or ICT training work in Siem Reap, Cambodia and remotely.",
    keywords:
      "contact Lao Thomorn, hire web developer Cambodia, freelance developer Siem Reap, UI UX designer contact",
    heading: "Get in Touch",
    body: [
      "Have a question or want to work together? Send me a message and I'll get back to you.",
      "I'm available for freelance full-stack web development, UI/UX design and ICT training work, based in Siem Reap, Cambodia and working remotely.",
    ],
  },
};

const DEFAULT_OG_IMAGE = "/og-image.png";

const siteConfig = { SITE_URL, PERSON, ROUTES, DEFAULT_OG_IMAGE };

export { SITE_URL, PERSON, ROUTES, DEFAULT_OG_IMAGE };
export default siteConfig;

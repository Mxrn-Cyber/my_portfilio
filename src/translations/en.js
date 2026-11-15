const en = {
  nav: {
    home: "Home",
    skillset: "Skillset",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact Me",
  },
  themeToggle: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
  },
  langToggle: {
    label: "Language",
  },
  preloader: {
    loading: "Loading",
  },
  home: {
    greeting: "Welcome to my portfolio!",
    intro: "I'm",
    name: "Thomorn, You Can Call Me Cyber-Mxrn",
    roles: [
      "Technical Support Fulltime",
      "Effective Problem Solver",
      "FullStack Web Developer",
      "UI/UX Designer",
      "ICT Teacher",
      "IT Support",
    ],
    tagline:
      "Bachelor's Degree in Information Technology Engineering from RUPP. Expertise in building web apps and exploring cybersecurity.",
    ctaProjects: "View my work",
    ctaContact: "Get in touch",
    photoAlt: "Thomorn",
    swapHint: "Hover or tap me",
    swapOn: "> access granted_",
    swapLabel: "Switch between my photo and my hacker avatar",
    scrollCue: "Scroll to explore",
  },
  about: {
    label: "Facts",
    heading: {
      a: "Let me",
      highlight: "introduce",
      b: "myself",
    },
    paragraphs: [
      "Hi, my name is Lao Thomorn and I was born in Phnom Penh. Currently, I'm living in Siem Reap, Cambodia.",

      "I hold a Bachelor's Degree in Information Technology Engineering (ITE) from the Royal University of Phnom Penh.",

      "I'm proficient in C, C++, Python, HTML, CSS, JavaScript, Sass, Node.js, React.js, Vue.js, PHP, Laravel, MySQL, MongoDB, SQLite, Firebase, Supabase, Git, GitHub, Flask, FastAPI, Tailwind CSS, Vite, Postman, and REST APIs — with additional knowledge of Java, GraphQL, Solidity, and modern web development tools.",

      "I have a strong passion for full-stack web development, especially building modern and responsive applications using React.js, Node.js, FastAPI, MongoDB, and other modern JavaScript technologies. I'm also interested in UI/UX design, responsive web design, and developing practical digital solutions.",

      "I'm also deeply interested in cybersecurity — especially ethical hacking, penetration testing, web security, and SOC-related technologies — and I enjoy learning about artificial intelligence and emerging technologies.",

      "Currently, I am an ICT Teacher at an organization in Siem Reap, where I teach young people practical ICT and digital skills, develop learning materials, assessments, and ICT activities. Alongside my teaching role, I also work as a Freelance Full-Stack Developer, building and improving web applications while continuing to develop my skills in modern technologies.",
    ],
    factsLabels: {
      location: "Location",
      role: "Role",
      focus: "Focus",
    },
    facts: {
      location: "Siem Reap, Cambodia",
      role: "Bachelor's Degree in Information Technology Engineering from RUPP; currently an ICT Teacher and Freelance Full-Stack Developer",
      focus:
        "Full-Stack Web Development, UI/UX Design, Cybersecurity, Technical Support, GPS Technical, and ICT Teaching",
    },
    cards: {
      available: "ICT Teacher · Freelance Dev",
      education: "Education",
      stack: "Tech stack",
      passion: "What drives me",
    },
    findMeOn: "Find me on",
    connectText: "Please don't hesitate to reach out to me and",
    connectHighlight: "connect.",
  },
  focus: {
    label: "Focus",
    heading: { a: "What I", highlight: "do" },
    marquee: ["React", "Node.js", "FastAPI", "Figma", "Laravel", "Vue.js", "MongoDB", "Tailwind CSS", "Python", "Cybersecurity", "UI/UX"],
    items: [
      { title: "Full-Stack Web Development", desc: "React, Node.js, FastAPI and Laravel apps" },
      { title: "UI/UX Design", desc: "Wireframes, prototypes and design systems in Figma" },
      { title: "Cybersecurity", desc: "Web security, ethical hacking and SOC basics" },
      { title: "ICT Teaching", desc: "Practical digital skills for young people" },
      { title: "Technical Support", desc: "Hardware, networks and troubleshooting" },
      { title: "Prototyping", desc: "From idea to a clickable demo, fast" },
    ],
  },
  skillset: {
    heading1: { a: "Professional", highlight: "Skillset" },
    heading2: { highlight: "Tools", b: "I use" },
    githubHeading: { a: "Days I", highlight: "Code" },
    githubSubheading:
      "Live contribution activity, pulled straight from my GitHub.",
    githubLinkText: "View GitHub profile",
  },
  projects: {
    label: "Feed",
    tags: { live: "Live Site", code: "Code", design: "UI/UX Design" },
    heading: { a: "Recent Top", highlight: "Works" },
    subheading: "Each project shows the problem, how I solved it, and the tech I used.",
    footerNote:
      "Want to see more of my work? Check out my GitHub or any of my social media — thank you!",
    ghButton: "GitHub",
    demoButton: "Demo",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    stackGroups: { fe: "Front-end", be: "Back-end", ops: "Tools" },
    filters: {
      all: "All",
      web: "Web apps",
      mobile: "Mobile",
      backend: "APIs",
      game: "Games",
      design: "UI/UX",
    },
    items: {
      typing3d: {
        title: "Typing Games 3D (PEPY)",
        problem:
          "My PEPY ICT students needed fun typing practice in both Khmer and English, and it had to run on old lab computers.",
        solution:
          "A 3D typing game app with 28 lessons, 5 games and a speed test, a 2D fallback for slow PCs, and live Class Race rooms where the teacher hosts a code and students compete on a leaderboard.",
      },
      edufundkh: {
        title: "EduFund KH",
        problem:
          "Cambodian students struggle to find scholarships that fit them and to plan the full cost of their education.",
        solution:
          "A Khmer/English platform to search and match scholarships, track applications and deadlines, and plan tuition costs in Riel or USD. Built to work on slow internet.",
      },
      BookSelling: {
        title: "eTnakRean",
        problem:
          "A client wanted to sell physics video lessons and PDF guides to Khmer students one item at a time, with local payment.",
        solution:
          "A Khmer/English store with grade filters, KHQR payment through ABA PayWay, files stored in Cloudflare R2 and an Express + MongoDB API.",
      },
      meakuteswebsitedemo: {
        title: "Meakutes Khmer",
        problem:
          "Information about places to visit in Cambodia is spread out and hard to find in one place.",
        solution:
          "A tourism platform with destinations, news, events, favourites and reviews, plus an admin panel so editors update content without touching code.",
      },
      MyPortfolioWebsite: {
        title: "My Portfolio Website",
        problem:
          "I needed one place to show my work, CV and contact details in both English and Khmer.",
        solution:
          "A bilingual React site with light/dark themes, a 3D hero, pre-rendered pages for SEO and auto-deploy from GitHub to Cloudflare.",
      },
      teacherAssistant: {
        title: "Teacher Assistant",
        problem:
          "A team project to give teachers one web platform for their class work.",
        solution:
          "Built with a 5-person team: a Vue.js front-end talking to a Laravel (PHP) back-end.",
      },
      theWalk: {
        title: "TheWalk",
        problem:
          "Year 3 project: build a full online shoe store experience as a front-end developer.",
        solution:
          "A React store with product pages, cart and login, using a mock API (MirageJS) and JWT so it works without a real server.",
      },
      fastapi: {
        title: "FastAPI Project",
        problem:
          "Year 2 assignment: build a clean, structured REST API.",
        solution:
          "A FastAPI service with SQLAlchemy models, PostgreSQL, JWT auth and separate dev/UAT/prod settings.",
      },
      kroeungtes: {
        title: "KroeungTes Mobile App",
        problem:
          "Year 4 Mobile Development course project.",
        solution:
          "Designed the UI in Figma first, then built the Android app in Kotlin with Jetpack Compose.",
      },
      car3d: {
        title: "Car Race Game (C++)",
        problem:
          "Computer Graphics class: learn how drawing and game loops work at a low level.",
        solution:
          "A 2D car race game in C++ with OpenGL and GLUT, adapted from an open-source project.",
      },
      meakutes: {
        title: "Meakutes Khmer — Figma UI",
        problem:
          "Plan the tourism app's screens before writing any code.",
        solution:
          "Full UI/UX design in Figma, later used to build the live Meakutes Khmer site.",
      },
      walkFigma: {
        title: "TheWalk — Figma UI Concept",
        problem:
          "Our four-person team struggled to stay coordinated on the Year 3 design.",
        solution:
          "I changed plans and finished the whole design on my own.",
      },
      firstUiUx: {
        title: "My First UI/UX Design",
        problem: "I was new to Figma and needed a real project to learn it.",
        solution: "My very first Figma design, made while learning the tool.",
      },
      blogger: {
        title: "Blogger Website",
        problem: "I needed a simple place to share assignments with my professors.",
        solution: "A blog on Blogger where I posted my coursework.",
      },
    },
  },
  resume: {
    downloadButton: "Download Resume",
    loadError: "Couldn't load the PDF preview — try the download button below.",
    loading: "Loading resume…",
  },
  contact: {
    heading: { a: "Get in", highlight: "touch" },
    lead: "Have a question or want to work together? Send me a message and I'll get back to you.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    sendButton: "Send message",
    notDone: "Please fill in all the fields.",
    done: "Thanks for reaching out! I've received your message.",
  },
  footer: {
    localTime: "Local time",
    location: "Siem Reap, Cambodia",
    cta: "Got a project in mind?",
    ctaLink: "Let's talk",
    madeWith: "Made with ☕ in Siem Reap",
    dept: "Department of Information Technology and Engineering",
    copyright: "Copyright ©",
  },
};

export default en;

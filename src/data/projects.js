import typing from "../assets/projects/typing.webp";
import edufundkh from "../assets/projects/edufundkh.webp";
import Physic from "../assets/projects/Physic.webp";
import Newcontent from "../assets/projects/meakutes-site.webp";
import Portfolio from "../assets/projects/Portfolio.webp";
import teacher from "../assets/projects/teacher.webp";
import lift from "../assets/projects/lift.webp";
import kickstart from "../assets/projects/kickstart.webp";
import KG from "../assets/projects/KG.webp";
import car from "../assets/projects/car.webp";
import pg from "../assets/projects/pg.webp";
import krypto from "../assets/projects/krypto.webp";
import first from "../assets/projects/first.webp";
import project from "../assets/projects/project.webp";

// stack groups: fe = front-end, be = back-end / data, ops = hosting & tools
export const projectList = [
  {
    key: "typing3d",
    category: "web",
    imgPath: typing,
    demoLink: "https://typing-3d-2.laothomorn.workers.dev/",
    stack: {
      fe: ["React 18", "Vite", "Three.js", "React Three Fiber"],
      be: ["Cloudflare Workers", "Durable Objects", "WebSockets"],
      ops: ["Cloudflare"],
    },
  },
  {
    key: "edufundkh",
    category: "web",
    imgPath: edufundkh,
    demoLink: "https://edufundkh-me.laothomorn.workers.dev/",
    stack: {
      fe: ["React", "Vite"],
      be: ["REST API"],
      ops: ["Cloudflare Workers", "Render"],
    },
  },
  {
    key: "BookSelling",
    category: "web",
    imgPath: Physic,
    demoLink: "https://reanphysics.laothomorn.workers.dev",
    stack: {
      fe: ["React", "Vite", "Tailwind CSS"],
      be: ["Express", "MongoDB Atlas", "Cloudflare R2", "ABA PayWay (KHQR)"],
      ops: ["Cloudflare Workers", "Render"],
    },
  },
  {
    key: "meakuteswebsitedemo",
    category: "web",
    imgPath: Newcontent,
    demoLink: "https://meakutes-khmer-app.pages.dev/",
    stack: {
      fe: ["React", "Vite", "Tailwind CSS", "React Router"],
      be: ["FastAPI", "MySQL", "SQLAlchemy", "Google Sign-In"],
      ops: ["Cloudflare"],
    },
  },
  {
    key: "MyPortfolioWebsite",
    category: "web",
    imgPath: Portfolio,
    ghLink: "https://github.com/Mxrn-Cyber/my_portfilio",
    demoLink: "https://laothomorn-portfolio.site/",
    stack: {
      fe: ["React", "React Bootstrap", "Three.js", "React Router"],
      be: ["EmailJS"],
      ops: ["Cloudflare Pages", "GitHub Actions"],
    },
  },
  {
    key: "teacherAssistant",
    category: "web",
    imgPath: teacher,
    ghLink: "https://github.com/Mxrn-Cyber/Teacher-Assistant",
    demoLink: "https://teacher-assistant-eeub.vercel.app",
    stack: {
      fe: ["Vue.js"],
      be: ["Laravel", "PHP"],
      ops: ["Vercel"],
    },
  },
  {
    key: "theWalk",
    category: "web",
    imgPath: lift,
    ghLink: "https://github.com/Mxrn-Cyber/the_walk_project",
    demoLink: "https://shoestore-bzk.pages.dev/",
    stack: {
      fe: ["React", "React Router", "Axios"],
      be: ["MirageJS (mock API)", "JWT"],
      ops: ["Cloudflare Pages"],
    },
  },
  {
    key: "fastapi",
    category: "backend",
    imgPath: kickstart,
    ghLink: "https://github.com/Mxrn-Cyber/Api_Project_Python",
    stack: {
      be: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT"],
    },
  },
  {
    key: "kroeungtes",
    category: "mobile",
    imgPath: KG,
    ghLink: "https://github.com/Mxrn-Cyber/Krouen-Tes-Y4-mobile-app",
    demoLink:
      "https://www.figma.com/design/kpVVDzJhpYHGwpX98BEyT6/KrounTes-MobAPP?node-id=0-1&t=ITMSrF2VxAU0ZRdi-1",
    stack: {
      fe: ["Kotlin", "Jetpack Compose", "Material 3"],
      ops: ["Figma", "Android Studio"],
    },
  },
  {
    key: "car3d",
    category: "game",
    imgPath: car,
    ghLink: "https://github.com/Mxrn-Cyber/-CarGame-main.cpp",
    stack: {
      fe: ["C++", "OpenGL", "GLUT"],
    },
  },
  {
    key: "meakutes",
    category: "design",
    imgPath: pg,
    demoLink:
      "https://www.figma.com/design/c86lTcKw6XONsrfZHmBxIB/Meakutes(Khmer)?node-id=4-61&t=LMPh3Y7tT4KDcFbM-1",
    stack: { ops: ["Figma"] },
  },
  {
    key: "walkFigma",
    category: "design",
    imgPath: krypto,
    demoLink:
      "https://www.figma.com/design/OcAIxguEcK9g7Yx3q3K57E/The-Walk(Shoes-Store)?node-id=0-1&t=zVQFMXAcyCXdf8g3-1",
    stack: { ops: ["Figma"] },
  },
  {
    key: "firstUiUx",
    category: "design",
    imgPath: first,
    demoLink:
      "https://www.figma.com/design/eMJmYXf96sOn1TwIiB6PN0/my_love_project?node-id=0-1&t=te8iIsi2n3GiSmHQ-1",
    stack: { ops: ["Figma"] },
  },
  {
    key: "blogger",
    category: "web",
    imgPath: project,
    demoLink: "https://mornposeidon.blogspot.com/",
    stack: { ops: ["Blogger"] },
  },
];

export const categories = ["all", "web", "mobile", "backend", "game", "design"];

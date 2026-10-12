import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFigma, FaTiktok } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import {
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { HiOutlineCpuChip, HiOutlineCommandLine } from "react-icons/hi2";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Common/Reveal";
import SectionLabel from "../Common/SectionLabel";
import Portrait from "../../assets/hero-portrait.webp";

// Tech names stay the same in both languages.
const STACK = [
  "React.js", "Node.js", "FastAPI", "Laravel", "Vue.js", "Python",
  "JavaScript", "PHP", "C / C++", "HTML", "CSS", "Sass", "Tailwind CSS",
  "MongoDB", "MySQL", "SQLite", "Firebase", "Supabase", "Flask", "Vite",
  "Git", "GitHub", "Postman", "REST APIs",
];
const STACK_EXTRA = ["Java", "GraphQL", "Solidity"];

const SOCIALS = [
  { href: "https://github.com/Mxrn-Cyber", label: "GitHub", icon: <AiFillGithub /> },
  { href: "https://x.com/cybermorn", label: "X / Twitter", icon: <AiOutlineTwitter /> },
  { href: "https://www.linkedin.com/in/lao-thomorn-347a4b28b/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: "https://www.facebook.com/morn.scripter/", label: "Facebook", icon: <SiFacebook /> },
  { href: "https://www.tiktok.com/@cybermorn?_t=8pGtG1tzu12&_r=1", label: "TikTok", icon: <FaTiktok /> },
  { href: "https://www.figma.com/@CyberMorn", label: "Figma", icon: <FaFigma /> },
];

// Cursor-following spotlight on each card.
const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Card = ({ className = "", delay = 0, children }) => (
  <Reveal delay={delay} className={`bento-card ${className}`} onMouseMove={spot}>
    {children}
  </Reveal>
);

const CardHead = ({ icon, children }) => (
  <div className="bento-head">
    <span className="bento-icon">{icon}</span>
    <span className="bento-kicker">{children}</span>
  </div>
);

const About = () => {
  const { t } = useLanguage();
  const p = t("about.paragraphs");
  const para = (i) => (Array.isArray(p) ? p[i] : "");
  const heading = t("about.heading");
  const facts = t("about.facts");
  const labels = t("about.factsLabels");
  const cards = t("about.cards");

  return (
    <section className="home-about-section about-v2" id="about">
      <Container>
        <Reveal className="about-v2-header">
          <SectionLabel>{t("about.label")}</SectionLabel>
          <h2 className="about-v2-title">
            {heading.a} <span className="about-v2-hl">{heading.highlight}</span>{" "}
            {heading.b}
          </h2>
        </Reveal>

        <div className="bento">
          {/* Intro — the big one */}
          <Card className="bento-intro">
            <div className="bento-intro-top">
              <img src={Portrait} alt="" className="bento-avatar" loading="lazy" />
              <span className="bento-status">
                <span className="bento-status-dot" aria-hidden="true" />
                {cards.available}
              </span>
            </div>
            <p className="bento-lead">{para(0)}</p>
            <p className="bento-body">{para(5)}</p>
          </Card>

          {/* Location */}
          <Card className="bento-location" delay={80}>
            <CardHead icon={<HiOutlineLocationMarker />}>{labels.location}</CardHead>
            <div className="bento-big">{facts.location}</div>
            <div className="bento-coords">13.36° N · 103.86° E</div>
            <div className="bento-radar" aria-hidden="true">
              <span /><span /><span />
            </div>
          </Card>

          {/* Education */}
          <Card className="bento-edu" delay={140}>
            <CardHead icon={<HiOutlineAcademicCap />}>{cards.education}</CardHead>
            <p className="bento-body">{para(1)}</p>
          </Card>

          {/* Stack */}
          <Card className="bento-stack" delay={80}>
            <CardHead icon={<HiOutlineCommandLine />}>{cards.stack}</CardHead>
            <ul className="bento-chips">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
              {STACK_EXTRA.map((s) => (
                <li key={s} className="is-extra">{s}</li>
              ))}
            </ul>
          </Card>

          {/* Passion */}
          <Card className="bento-passion" delay={140}>
            <CardHead icon={<HiOutlineSparkles />}>{cards.passion}</CardHead>
            <p className="bento-body">{para(3)}</p>
            <p className="bento-body">{para(4)}</p>
          </Card>

          {/* Focus */}
          <Card className="bento-focus" delay={200}>
            <CardHead icon={<HiOutlineCpuChip />}>{labels.focus}</CardHead>
            <p className="bento-body">{facts.focus}</p>
          </Card>

          {/* Social */}
          <Card className="bento-social" delay={120}>
            <div>
              <CardHead icon={<HiOutlineLightningBolt />}>{t("about.findMeOn")}</CardHead>
              <p className="bento-social-text">
                {t("about.connectText")}{" "}
                <span className="bento-social-hl">{t("about.connectHighlight")}</span>
              </p>
            </div>
            <ul className="bento-socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default About;

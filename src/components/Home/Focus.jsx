import React from "react";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Common/Reveal";
import SectionLabel from "../Common/SectionLabel";

// Scrolling row of tech names. Words are doubled so the loop is seamless.
const MarqueeRow = ({ words, reverse }) => (
  <div className={`marquee${reverse ? " marquee-reverse" : ""}`} aria-hidden="true">
    <div className="marquee-track">
      {[...words, ...words].map((w, i) => (
        <span className="marquee-item" key={i}>
          {w}
          <span className="marquee-star">✦</span>
        </span>
      ))}
    </div>
  </div>
);

// "Focus": numbered list of disciplines between two marquee rows.
const Focus = () => {
  const { t } = useLanguage();
  const items = t("focus.items");
  const list = Array.isArray(items) ? items : [];
  const marquee = t("focus.marquee");
  const words = Array.isArray(marquee) ? marquee : [];

  return (
    <section className="focus-section" id="focus">
      <MarqueeRow words={words} />
      <Container>
        <Reveal>
          <SectionLabel>{t("focus.label")}</SectionLabel>
          <h2 className="section-heading focus-heading">
            {t("focus.heading.a")}{" "}
            <span className="yellow">{t("focus.heading.highlight")}</span>
          </h2>
        </Reveal>
        <ol className="focus-list">
          {list.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="focus-item">
              <span className="focus-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="focus-title">{item.title}</span>
              <span className="focus-desc">{item.desc}</span>
              <span className="focus-arrow" aria-hidden="true">↗</span>
            </Reveal>
          ))}
        </ol>
      </Container>
      <MarqueeRow words={words} reverse />
    </section>
  );
};

export default Focus;

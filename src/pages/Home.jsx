import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import Hero3D from "../components/Home/Hero3D";
import Focus from "../components/Home/Focus";
import HeroSwap from "../components/Home/HeroSwap";
import { useLanguage } from "../context/LanguageContext";

import Seo from "../seo/Seo";

const Home = () => {
  const { t, lang } = useLanguage();
  const roles = t("home.roles");

  return (
    <section>
      <Seo route="home" />
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-hero">
          <Row className="align-items-center home-hero-row">
            <Col lg={7} className="home-hero-text">
              <p className="hero-eyebrow">
                {t("home.greeting")}{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </p>
              <h1 className="hero-name">
                {t("home.intro")} <strong>{t("home.name")}</strong>
              </h1>
              <div className="hero-role">
                <Type key={lang} strings={Array.isArray(roles) ? roles : []} />
              </div>
              <p className="hero-tagline">{t("home.tagline")}</p>
              <div className="hero-cta">
                <Link to="/project" className="btn-hero btn-hero-primary">
                  {t("home.ctaProjects")}
                </Link>
                <Link to="/contact" className="btn-hero btn-hero-ghost">
                  {t("home.ctaContact")}
                </Link>
              </div>
            </Col>
            <Col lg={5} className="home-hero-media">
              <Hero3D />
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <HeroSwap />
              </Tilt>
            </Col>
          </Row>
          <a href="#focus" className="scroll-cue">
            <span>{t("home.scrollCue")}</span>
            <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
          </a>
        </Container>
      </Container>
      <Focus />
      <About />
    </section>
  );
};

export default Home;

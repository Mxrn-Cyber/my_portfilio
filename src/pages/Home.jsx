import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import { useLanguage } from "../context/LanguageContext";

// Hero portrait — background removed, saved as WebP with an alpha channel
// (46KB, vs 561KB for the same cut-out as a PNG). The outline around the
// silhouette is drawn in CSS on .hero-photo, so it follows the theme rather
// than being baked into the file. hero-portrait.png sits alongside it if you
// ever need a non-WebP copy.
import HeroImg from "../assets/hero-portrait.webp";

const Home = () => {
  const { t, lang } = useLanguage();
  const roles = t("home.roles");

  return (
    <section>
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
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <div className="hero-photo-frame">
                  <img
                    src={HeroImg}
                    className="hero-photo"
                    alt={t("home.photoAlt")}
                  />
                </div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;

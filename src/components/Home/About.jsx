import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFigma, FaTiktok } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const paragraphs = t("about.paragraphs");
  const heading = t("about.heading");
  const factsLabels = t("about.factsLabels");
  const facts = t("about.facts");

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <h1 className="section-heading">
          {heading.a} <span className="yellow">{heading.highlight}</span>{" "}
          {heading.b}
        </h1>
        <Row className="g-4 about-row">
          <Col lg={7} className="home-about-description">
            {Array.isArray(paragraphs) &&
              paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </Col>
          <Col lg={5}>
            <div className="about-facts-card">
              <div className="about-fact">
                <span className="about-fact-icon">
                  <HiOutlineLocationMarker />
                </span>
                <div>
                  <div className="about-fact-label">{factsLabels.location}</div>
                  <div className="about-fact-value">{facts.location}</div>
                </div>
              </div>
              <div className="about-fact">
                <span className="about-fact-icon">
                  <HiOutlineAcademicCap />
                </span>
                <div>
                  <div className="about-fact-label">{factsLabels.role}</div>
                  <div className="about-fact-value">{facts.role}</div>
                </div>
              </div>
              <div className="about-fact">
                <span className="about-fact-icon">
                  <HiOutlineCpuChip />
                </span>
                <div>
                  <div className="about-fact-label">{factsLabels.focus}</div>
                  <div className="about-fact-value">{facts.focus}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2 className="section-subheading">{t("about.findMeOn")}</h2>
            <p>
              {t("about.connectText")}{" "}
              <span className="yellow">{t("about.connectHighlight")}</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mxrn-Cyber"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/cybermorn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lao-thomorn-347a4b28b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/morn.scripter/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="facebook"
                >
                  <SiFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@cybermorn?_t=8pGtG1tzu12&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="tiktok"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.figma.com/@CyberMorn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="figma"
                >
                  <FaFigma />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// Live Siem Reap time, ticking every second.
const useLocalTime = () => {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Phnom_Penh",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  const [time, setTime] = React.useState(fmt);
  React.useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Footer = () => {
  const { t } = useLanguage();
  const time = useLocalTime();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="footer-cta-kicker">{t("footer.cta")}</p>
          <Link to="/contact" className="footer-cta-link">
            {t("footer.ctaLink")} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="footer-meta">
          <div className="footer-meta-item">
            <span className="footer-meta-label">{t("footer.localTime")}</span>
            <span className="footer-clock">
              <span className="footer-clock-dot" aria-hidden="true" />
              {time} <small>GMT+7</small>
            </span>
          </div>
          <div className="footer-meta-item">
            <span className="footer-meta-label">📍</span>
            <span>{t("footer.location")}</span>
          </div>
          <div className="footer-meta-item footer-made">{t("footer.madeWith")}</div>
        </div>
      </div>
      <Row className="footer-bottom">
        <Col md="4" className="footer-copywright">
          <span>{t("footer.dept")}</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>{t("footer.copyright")} {year}</span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Mxrn-Cyber"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/cybermorn"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lao-thomorn-347a4b28b/"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/morn.scripter"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <SiFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.tiktok.com/@cybermorn?_t=8pGtG1tzu12&_r=1"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <FaTiktok />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.figma.com/@CyberMorn"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <FaFigma />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

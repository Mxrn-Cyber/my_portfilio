import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
const Footer = () => {
  const { t } = useLanguage();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
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

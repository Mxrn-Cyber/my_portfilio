import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaFigma, FaTiktok } from "react-icons/fa6";
import "./Social.css";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/Mxrn-Cyber"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://x.com/cybermorn"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/lao-thomorn-347a4b28b/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.facebook.com/morn.scripter"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiFacebook />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.tiktok.com/@cybermorn?_t=8pGtG1tzu12&_r=1"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <FaTiktok />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.figma.com/@CyberMorn"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
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

export default Social;

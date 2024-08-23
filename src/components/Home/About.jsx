import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Lao Thomorn </span>
              and I'm from <span className="yellow">Phnom Penh, Cambodia </span>
              <br />
              <br />
              I am recently is a student year 4 at Royal University of Phnom
              Penh as a ITE student.
              <br />
              <br />I am proficient in
              <b className="yellow">
                {" "}
                C,C++, Python, html, Css, Javascript, Sass, Nodejs,ReactJs,
                Vuejs, Php, Laravel, Mysql, MongoDB, Firebase, Git,
                Github,Flaskapi, Fastapi.
              </b>
              as well as have knowledge in programming languages such as C,
              Java, Python,
              <b className="yellow"> GraphQL, and Solidity.</b>
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I am also interested in CyberSec Field
              <i>
                <b className="yellow"> Because i like hacking </b>and also i
                like learning
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
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
                  aria-label="instagram"
                >
                  <SiFacebook />
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

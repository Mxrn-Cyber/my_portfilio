import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiPython,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaFlask } from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 className="icon" />
        <div className="label">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 className="icon" />
        <div className="label">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass className="icon" />
        <div className="label">Sass</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="icon" />
        <div className="label">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="icon" />
        <div className="label">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="icon" />
        <div className="label">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp className="icon" />
        <div className="label">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel className="icon" />
        <div className="label">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql className="icon" />
        <div className="label">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb className="icon" />
        <div className="label">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql className="icon" />
        <div className="label">GraphQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="icon" />
        <div className="label">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFlask className="icon" />
        <div className="label">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="icon" />
        <div className="label">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="icon" />
        <div className="label">Git Tools</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="icon" />
        <div className="label">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon">C</div>
        <div className="label">C Programming</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon">C++</div>
        <div className="label">C++</div>
      </Col>
    </Row>
  );
};

export default Techstack;

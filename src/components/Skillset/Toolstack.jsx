import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiCloudflare,
  SiVercel,
  SiNetlify,
  SiAndroidstudio,
  SiFigma,
  SiIntellijidea,
  SiPycharm,
  SiUnity,
  SiMamp,
  SiDocker,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import "./Toolstack.css";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="icon" />
        <div className="label">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="icon" />
        <div className="label">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="icon" />
        <div className="label">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify className="icon" />
        <div className="label">Netlify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare className="icon" />
        <div className="label">Cloudflare</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="icon" />
        <div className="label">Git Tools</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio className="icon" />
        <div className="label">Andriod Studios</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma className="icon" />
        <div className="label">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea className="icon" />
        <div className="label">Intellijidea</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm className="icon" />
        <div className="label">Pycharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity className="icon" />
        <div className="label">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMamp className="icon" />
        <div className="label">MAMP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker className="icon" />
        <div className="label">Docker</div>
      </Col>
    </Row>
  );
};

export default Toolstack;

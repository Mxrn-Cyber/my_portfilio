import React from "react";
import { Col, Row } from "react-bootstrap";
import {
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
  SiOpenaigym,
  SiGoogle,
  SiAnthropic,
  SiPoe,
  SiMoonshotai,
  SiRender,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaMicrosoft } from "react-icons/fa";
import "./Toolstack.css";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscodeInsiders className="icon" />
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
        <div className="label">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma className="icon" />
        <div className="label">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea className="icon" />
        <div className="label">IntelliJ IDEA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm className="icon" />
        <div className="label">PyCharm</div>
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
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenaigym className="icon" />
        <div className="label">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle className="icon" />
        <div className="label">Google Workspace</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrosoft className="icon" />
        <div className="label">MS 365</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnthropic className="icon" />
        <div className="label">Claude AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPoe className="icon" />
        <div className="label">Poe</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMoonshotai className="icon" />
        <div className="label">Kimi AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender className="icon" />
        <div className="label">Render</div>
      </Col>
    </Row>
  );
};

export default Toolstack;

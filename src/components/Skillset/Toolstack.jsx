import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiCloudflare,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
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
    </Row>
  );
};

export default Toolstack;

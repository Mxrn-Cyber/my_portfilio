import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row className="justify-content-center pb-2">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="Mxrn-Cyber"
          blockMargin={5}
          color="#000000"
          fontSize={16}
        />
      </div>
    </Row>
  );
};

export default Github;

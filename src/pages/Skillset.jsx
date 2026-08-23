import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";
import { useLanguage } from "../context/LanguageContext";

const Skillset = () => {
  const { t } = useLanguage();
  const heading1 = t("skillset.heading1");
  const heading2 = t("skillset.heading2");

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {heading1.a} <strong className="yellow">{heading1.highlight} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">{heading2.highlight}</strong> {heading2.b}
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;

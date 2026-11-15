import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import { projectList, categories } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../seo/Seo";
import Reveal from "../components/Common/Reveal";
import SectionLabel from "../components/Common/SectionLabel";

const Projects = () => {
  const { t } = useLanguage();
  const heading = t("projects.heading");
  const items = t("projects.items");
  const filters = t("projects.filters");
  const [active, setActive] = useState("all");

  const shown =
    active === "all"
      ? projectList
      : projectList.filter((p) => p.category === active);

  return (
    <Container fluid className="project-section">
      <Seo route="project" />
      <Particle />
      <Container>
        <SectionLabel arrow="↓">{t("projects.label")}</SectionLabel>
        <h1 className="project-heading">
          {heading.a} <strong className="yellow">{heading.highlight} </strong>
        </h1>
        <p className="section-lead">{t("projects.subheading")}</p>

        <div className="project-filters" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`project-filter${active === c ? " is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {filters[c]}
              <span className="project-filter-count">
                {c === "all"
                  ? projectList.length
                  : projectList.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center pb-2">
          {shown.map((p, i) => (
            <Col xs={12} md={6} lg={4} className="project-card" key={p.key}>
              <Reveal delay={(i % 3) * 90} className="h-100">
                <ProjectCard
                  index={projectList.indexOf(p)}
                  imgPath={p.imgPath}
                  title={items[p.key]?.title}
                  problem={items[p.key]?.problem}
                  solution={items[p.key]?.solution}
                  stack={p.stack}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                />
              </Reveal>
            </Col>
          ))}
        </Row>
        <p className="section-lead">{t("projects.footerNote")}</p>
      </Container>
    </Container>
  );
};

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.webp";
import project from "../assets/projects/project.webp";
import lift from "../assets/projects/lift.webp";
import krypto from "../assets/projects/krypto.webp";
import kickstart from "../assets/projects/kickstart.webp";
import first from "../assets/projects/first.webp";
import teacher from "../assets/projects/teacher.webp";
import car from "../assets/projects/car.webp";
import KG from "../assets/projects/KG.webp";
import Physic from "../assets/projects/Physic.webp";
import Portfolio from "../assets/projects/Portfolio.webp";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../seo/Seo";

const Projects = () => {
  const { t } = useLanguage();
  const heading = t("projects.heading");
  const items = t("projects.items");

  const projectList = [
    {
      key: "theWalk",
      imgPath: lift,
      ghLink: "https://github.com/Mxrn-Cyber/the_walk_project",
      demoLink: "https://shoestore-bzk.pages.dev/",
    },
    {
      key: "blogger",
      imgPath: project,
      demoLink: "https://mornposeidon.blogspot.com/",
    },
    {
      key: "fastapi",
      imgPath: kickstart,
      ghLink: "https://github.com/Mxrn-Cyber/Api_Project_Python",
    },
    {
      key: "meakutes",
      imgPath: pg,
      demoLink:
        "https://www.figma.com/design/c86lTcKw6XONsrfZHmBxIB/Meakutes(Khmer)?node-id=4-61&t=LMPh3Y7tT4KDcFbM-1",
    },
    {
      key: "walkFigma",
      imgPath: krypto,
      demoLink:
        "https://www.figma.com/design/OcAIxguEcK9g7Yx3q3K57E/The-Walk(Shoes-Store)?node-id=0-1&t=zVQFMXAcyCXdf8g3-1",
    },
    {
      key: "firstUiUx",
      imgPath: first,
      demoLink:
        "https://www.figma.com/design/eMJmYXf96sOn1TwIiB6PN0/my_love_project?node-id=0-1&t=te8iIsi2n3GiSmHQ-1",
    },
    {
      key: "teacherAssistant",
      imgPath: teacher,
      ghLink: "https://github.com/Mxrn-Cyber/Teacher-Assistant",
    },
    {
      key: "car3d",
      imgPath: car,
      ghLink: "https://github.com/Mxrn-Cyber/-CarGame-main.cpp",
    },
    {
      key: "kroeungtes",
      imgPath: KG,
      demoLink:
        "https://www.figma.com/design/kpVVDzJhpYHGwpX98BEyT6/KrounTes-MobAPP?node-id=0-1&t=ITMSrF2VxAU0ZRdi-1",
    },
    {
      key: "BookSelling",
      imgPath: Physic,
      ghLink: "https://github.com/Mxrn-Cyber/physic_project",
      demoLink: "https://tutorial-site-client.laothomorn.workers.dev/",
    },
    {
      key: "MyPortfolioWebsite",
      imgPath: Portfolio,
      ghLink: "https://github.com/Mxrn-Cyber/my_portfilio",
      demoLink: "myportfolio-7s0.pages.dev",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Seo route="project" />
      <Particle />
      <Container>
        <h1 className="project-heading">
          {heading.a} <strong className="yellow">{heading.highlight} </strong>
        </h1>
        <p className="section-lead">{t("projects.subheading")}</p>
        <Row className="g-4 justify-content-center pb-2">
          {projectList.map((p) => (
            <Col xs={12} sm={6} lg={4} className="project-card" key={p.key}>
              <ProjectCard
                imgPath={p.imgPath}
                title={items[p.key]?.title}
                description={items[p.key]?.description}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
              />
            </Col>
          ))}
        </Row>
        <p className="section-lead">{t("projects.footerNote")}</p>
      </Container>
    </Container>
  );
};

export default Projects;

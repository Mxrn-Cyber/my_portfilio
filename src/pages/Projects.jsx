import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import first from "../assets/projects/first.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="TheWalk "
              description="Thewalk is the project i build it at Semester once in Y3 the is the website where the user can buying shoes by online such as other ecommerce website."
              ghLink="https://github.com/Mxrn-Cyber/the_walk_project"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Blogger Website Blogs"
              description="This is the project i do from first to uplaod any assingment to Prof. I used to blogger to build it."
              demoLink="https://mornposeidon.blogspot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Fast API Project"
              description="FastAPI is the PP from Y2 i used to do it with my project Prof."
              ghLink="https://github.com/Mxrn-Cyber/Api_Project_Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Meakutes Khmer"
              description="Meakutes Khmer is the Website where user can seeking the places to visit in Cambodia this web haven't complete yet i just done UX/UI, and I plan to complete in the last of the Semester"
              demoLink="https://www.figma.com/design/c86lTcKw6XONsrfZHmBxIB/Meakutes(Khmer)?node-id=4-61&t=vGXXttvyhyCYR2Bk-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="The Walk Figma User Interface concept first versoin"
              description="Project The walk is my the project from S1 Y3 at ITE. I have four member in team but it's walk to intergrate i change my plan to headling it alone."
              // ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://www.figma.com/design/8sfSa8wJgjIhjqtbtAlDKk/The-Walk-Ver2-Website.-(Community)?node-id=159-20&t=3ji17qqJeKWBEgRH-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first}
              isBlog={false}
              title="My First UX/UI Desgin"
              description="The Project figma first i used to learn from figma."
              // ghLink="https://github.com/19sajib/Solidity-Kickstart"
              demoLink="https://www.figma.com/design/8sfSa8https://www.figma.com/design/eMJmYXf96sOn1TwIiB6PN0/my_love_project?node-id=0-1&t=nZJ6kK27m6BQejID-1wJgjIhjqtbtAlDKk/The-Walk-Ver2-Website.-(Community)?node-id=159-20&t=3ji17qqJeKWBEgRH-1"
            />
          </Col>
        </Row>
        <p style={{ color: "white" }}>
          To seaking more of my work please kindly watch out my Github or any
          socail media of mind.Thank you.
        </p>
      </Container>
    </Container>
  );
};

export default Projects;

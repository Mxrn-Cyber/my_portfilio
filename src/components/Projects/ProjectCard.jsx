import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const ProjectCard = (props) => {
  const { t } = useLanguage();
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        // Cards below the fold don't need to block the initial render. With
        // eleven screenshots on this page, lazy loading is the difference
        // between fetching all of them up front and fetching the two or three
        // the visitor can actually see.
        loading="lazy"
        decoding="async"
        alt={props.title ? `${props.title} screenshot` : "Project screenshot"}
        className="project-card-img"
      />
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-text">{props.description}</Card.Text>

        <div className="project-card-actions">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-card-btn"
            >
              <BsGithub /> &nbsp; {t("projects.ghButton")}
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-btn"
            >
              <CgWebsite /> &nbsp; {t("projects.demoButton")}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

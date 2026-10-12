import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../context/LanguageContext";

// Work out a "type" tag from the links a project has.
const tagFor = ({ ghLink, demoLink }) => {
  if (demoLink && /figma\.com/.test(demoLink)) return "design";
  if (demoLink) return "live";
  if (ghLink) return "code";
  return null;
};

const canHover =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ProjectCard = (props) => {
  const { t } = useLanguage();
  const tag = tagFor(props);
  return (
    <Tilt
      className="project-tilt"
      tiltEnable={canHover}
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      perspective={1100}
      scale={1.02}
      transitionSpeed={900}
      glareEnable={canHover}
      glareMaxOpacity={0.18}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="16px"
    >
    <Card className="project-card-view">
      <div className="project-card-meta">
        {props.index != null && (
          <span className="project-card-index">
            {String(props.index + 1).padStart(2, "0")}
          </span>
        )}
        {tag && (
          <span className={`project-tag project-tag-${tag}`}>
            {t(`projects.tags.${tag}`)}
          </span>
        )}
      </div>
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
    </Tilt>
  );
};

export default ProjectCard;

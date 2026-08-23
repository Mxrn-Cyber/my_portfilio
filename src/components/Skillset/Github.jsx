import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const GITHUB_USERNAME = "Mxrn-Cyber";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const Github = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const heading = t("skillset.githubHeading");

  return (
    <Row className="justify-content-center pb-2">
      <h1 className="project-heading" style={{ paddingBottom: "4px" }}>
        {heading.a} <strong className="yellow">{heading.highlight}</strong>
      </h1>
      <p
        className="section-lead text-center"
        style={{ marginBottom: "1.75rem" }}
      >
        {t("skillset.githubSubheading")}
      </p>

      <div className="github-section-card">
        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockMargin={5}
            color={theme === "dark" ? "#8fb8ff" : "#000000"}
            fontSize={16}
          />
        </div>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="github-profile-link"
        >
          <BsGithub /> {t("skillset.githubLinkText")}
        </a>
      </div>
    </Row>
  );
};

export default Github;

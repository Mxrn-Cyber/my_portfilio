import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/sLogo.png";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    // `body { overflow-x: hidden }` (see style.css) makes the browser turn
    // <body> itself into the scrolling element instead of the window, so
    // window.scrollY stays 0 forever. Read whichever element actually
    // scrolled so the "sticky" navbar background reliably kicks in.
    function scrollHandler() {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      updateNavbar(scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler, { passive: true });
    document.body.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      document.body.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skillset"
                onClick={() => updateExpanded(false)}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> {t("nav.skillset")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> {t("nav.contact")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="navbar-utility-item">
              <button
                type="button"
                className="lang-toggle"
                onClick={toggleLang}
                aria-label={t("langToggle.label")}
              >
                <span className={lang === "en" ? "lang-option active" : "lang-option"}>
                  EN
                </span>
                <span className="lang-sep">/</span>
                <span className={lang === "km" ? "lang-option active" : "lang-option"}>
                  ខ្មែរ
                </span>
              </button>
            </Nav.Item>

            <Nav.Item className="navbar-utility-item">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={
                  theme === "light" ? t("themeToggle.toDark") : t("themeToggle.toLight")
                }
                title={
                  theme === "light" ? t("themeToggle.toDark") : t("themeToggle.toLight")
                }
              >
                {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Skill from "./pages/Skillset";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    // Hide the preloader once the browser has actually finished loading,
    // rather than after a fixed timer. The old version waited a flat 1200ms
    // regardless of how fast the page was ready, which meant a spinner sat on
    // screen for over a second on every visit even when there was nothing
    // left to wait for.
    //
    // The 1500ms fallback only exists so a stalled asset can't leave the
    // spinner up forever. On a normal visit it never fires.
    let cancelled = false;
    const done = () => {
      if (!cancelled) upadateLoad(false);
    };

    if (document.readyState === "complete") {
      // Already loaded (React mounted after the load event, or on a warm
      // cache). One frame keeps the fade-out from being visibly abrupt.
      const frame = requestAnimationFrame(done);
      return () => {
        cancelled = true;
        cancelAnimationFrame(frame);
      };
    }

    window.addEventListener("load", done);
    const fallback = setTimeout(done, 1500);

    return () => {
      cancelled = true;
      window.removeEventListener("load", done);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

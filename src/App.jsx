import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";

// Other pages load only when visited, so the home page downloads less.
const Skill = lazy(() => import("./pages/Skillset"));
const Project = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Hide the preloader when the page has loaded (1.5s fallback for stalled assets).
    let cancelled = false;
    const done = () => {
      if (!cancelled) setLoad(false);
    };

    if (document.readyState === "complete") {
      // Already loaded — wait one frame so the fade-out isn't abrupt.
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
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

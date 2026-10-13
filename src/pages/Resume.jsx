import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import Particle from "../components/Particle";
import Seo from "../seo/Seo";
import { useLanguage } from "../context/LanguageContext";
import pdf from "../assets/Lao-Thomorn-CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const { t } = useLanguage();
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Seo route="resume" />
      <Particle />

      <Row className="resume justify-content-center g-0">
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={t("resume.loading")}
          error={t("resume.loadError")}
          className="d-flex flex-column align-items-center"
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              scale={width > 786 ? 1.7 : 0.6}
              className="mb-4"
            />
          ))}
        </Document>
      </Row>

      <Row className="g-0 justify-content-center">
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: 250 }}>
          <AiOutlineDownload /> &nbsp;{t("resume.downloadButton")}
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;

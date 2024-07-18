import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../components/Particle";
import pdf from "../assets/sajib.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://drive.google.com/file/d/1zVgkpyV7QVX8u2er3ha3dUEiRaT-rpWn/view`; // Define resumeLink outside the component (not used)

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [showDownloadButton, setShowDownloadButton] = useState(true); // Local download button visibility
  const [useServerDownload, setUseServerDownload] = useState(false); // Server-side download button visibility

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleLocalDownloadClick = () => {
    setShowDownloadButton(false); // Hide local download button after click (optional)
  };

  const handleServerDownloadClick = async () => {
    // Implement server-side download logic here (using Google Drive API)
    // Replace with your actual implementation for fetching resume from server
    try {
      const response = await fetch("/download-resume"); // Replace with your server endpoint
      if (!response.ok) {
        throw new Error("Error downloading resume");
      }
      const data = await response.blob();
      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Handle download error gracefully
    } finally {
      setUseServerDownload(false); // Hide server-side download button after click (optional)
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {showDownloadButton && ( // Show local download button
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              onClick={handleLocalDownloadClick}
            >
              <AiOutlineDownload /> &nbsp;Download Resume (Local)
            </Button>
          )}

          {useServerDownload && ( // Conditionally render server-side download button
            <Button
              variant="primary"
              style={{ maxWidth: "250px", marginLeft: 10 }} // Adjust spacing
              onClick={handleServerDownloadClick}
            >
              <AiOutlineDownload /> &nbsp;Download Resume (Latest)
            </Button>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Resume;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../assets/homeLogo.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {" "}
            {/* This ensures vertical centering */}
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Lao Thomorn</strong>
              </h1>

              <div style={{ padding: 15, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            {/* <Col
              md={5}
              style={{
                paddingRight: 0,
                display: "flex",
                justifyContent: "center", // Ensures the logo is centered horizontally
                alignItems: "center", // Ensures the logo is vertically centered
                height: "100vh", // Ensures the column takes the full height of the viewport
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "830px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;

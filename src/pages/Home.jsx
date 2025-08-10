import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content text-left">
          <Row>
            <Col md={5} className="home-header text-left">
              <h1 className="heading">
                Hi There!{" "}
                <span
                  className="wave"
                  role="img"
                  aria-labelledby="wave text-left">👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Lao Thomorn</strong>
              </h1>
              <div>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;

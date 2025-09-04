import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Team from "./Team";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h2 style={{ paddingBottom: 0 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>

              <h2 className="heading-name">
                We're
                <strong className="main-name"> EonTechs</strong>
                <br/><br/>                
              </h2>

              <h2 className="heading">Your's</h2>
              
              <h2 className="heading-name" style={{ fontSize: 40 }}><Type /></h2>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Team />
    </section>
  );
}

export default Home;

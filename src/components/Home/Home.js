import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.gif";
import Particle from "../Particle";
import BannerLogo from "./BannerLogo";
import Home2 from "./Home2";
import Type from "./Type";
import Team from "./Team";
import LogoCarousel from "./LogoCarousel";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
                🚀 Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We're
                <strong class="purple"> EonTechs,</strong> Your
                <br/>
                _<Type />
              </h1>
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
      <LogoCarousel />
      <Home2 />
      <Team />
    </section>
  );
}

export default Home;

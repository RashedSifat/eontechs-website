import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/group-work.gif";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h2>
          Know Who <strong className="purple">We Are</strong>
        </h2>
        <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{ justifyContent: "center" }}
          >            
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h2>
          Professional <strong className="purple">Skillset </strong>
        </h2>

        <Techstack />

        <h2>
          <strong className="purple">Tools</strong> We Use
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

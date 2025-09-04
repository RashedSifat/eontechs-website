import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eontechs from "../../Assets/Projects/eontechs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Projects</strong>
        </h1>
        <p>
          Explore a few of our recent solutions
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eontechs}
              isBlog={false}
              title="EonTechS"
              description="EonTechS is a full-stack web development and automation agency helping brands, startups, and enterprises scale their digital presence. We specialize in high-performance websites, eCommerce solutions, and AI-driven platforms built with modern frameworks like React, Next.js, Shopify, WordPress, and headless CMS."
              ghLink="https://github.com/RashedSifat/eontechs-website"
              demoLink="https://eontechs.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eontechs}
              isBlog={false}
              title="EonTechS"
              description="EonTechS is a full-stack web development and automation agency helping brands, startups, and enterprises scale their digital presence. We specialize in high-performance websites, eCommerce solutions, and AI-driven platforms built with modern frameworks like React, Next.js, Shopify, WordPress, and headless CMS."
              ghLink="https://github.com/RashedSifat/eontechs-website"
              demoLink="https://eontechs.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eontechs}
              isBlog={false}
              title="EonTechS"
              description="EonTechS is a full-stack web development and automation agency helping brands, startups, and enterprises scale their digital presence. We specialize in high-performance websites, eCommerce solutions, and AI-driven platforms built with modern frameworks like React, Next.js, Shopify, WordPress, and headless CMS."
              ghLink="https://github.com/RashedSifat/eontechs-website"
              demoLink="https://eontechs.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

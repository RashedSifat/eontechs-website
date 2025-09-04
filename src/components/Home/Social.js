import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

function SocialContact() {
  return (
    <Container fluid className="social-contact" id="social">
      <Row>
        <Col md={12} className="home-about-social">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/RashedSifat"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rashedsifat/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~01c3507b22db0d551a"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiUpwork />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.fiverr.com/s/zWR52wR"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <TbBrandFiverr />
              </a>
            </li>
          </ul>
          <p>
            Feel free to <a href="mailto:me.sifat@live.com"><span className="purple">connect </span></a>with me
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialContact;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

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
            {/*
            <li className="social-icons">
              <a
                href="https://www.facebook.com/rashedsifat/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaFacebookF />
              </a>
            </li>
            */}
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
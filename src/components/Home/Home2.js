import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { CgFileDocument } from "react-icons/cg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi Everyone, I am <span className="purple">Rashed </span> and
              I have completed my MSc in Computer Science and Engineering at Jahangirnagar University, Dhaka, BD.
              <br />
              <br />
              I fell in love with programming at my early age, started ACM solving with C and C++ at <a href="https://uhunt.onlinejudge.org/id/60961"><b className="purple">Onlinejudge.org</b></a> and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> PHP, Javascript and C++. </b>
              </i>
              <br />
              My field of Interest's are building new 
              <i>
                <b className="purple"> Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />
              Currently, I am running this Agency as a program manager and web developer.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
    
            <ul>
              <li className="about-activity">
                <ImPointRight /> Omnivorous Reading
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <p style={{ marginTop: "40px" }}>
              <Link to="/resume">
                <Button variant="primary">
                  <CgFileDocument style={{ marginBottom: "4px" }} /> &nbsp; MY RESUME
                </Button>
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
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
              {/*
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              */}
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
                  href="https://www.facebook.com/rashedsifat/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

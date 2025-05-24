import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { CgFileDocument } from "react-icons/cg";
import Social from "./Social";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              Hi Everyone, I am <span className="purple">Rashed </span> and
              I have completed my MSc in Computer Science and Engineering at Jahangirnagar University, Dhaka, BD.
              <br />
              <br />
              I fell in love with programming at my early age, started ACM solving with C and C++ at <a href="https://uhunt.onlinejudge.org/id/60961" target="+blank"><b className="purple">Onlinejudge.org</b></a> and I have at least learnt
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
            <br/>
            <h4>Rasheduzzaman Sifat</h4>
            <h5><span className="purple">Program Manager | eCommerce Specialist</span></h5>
            <p style={{ marginTop: "20px" }}>
              <Link to="/resume">
                <Button variant="primary">
                  <CgFileDocument style={{ marginBottom: "4px" }} /> &nbsp; MY RESUME
                </Button>
              </Link>
            </p>

            <Social />

          </Col>
        </Row>       
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../../Assets/morshed.png";
import Tilt from "react-parallax-tilt";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { CgFileDocument } from "react-icons/cg";

function TremMembers() {
  return (
 	<Container className="team-members" id="team">
      <h1>TEAM <span className="purple">MEMBERS</span></h1>
      <Row className="team-members-content">
        <Col md={12} style={{ padding: 20 }}>
            <Tilt>
              <img
                src={Img1}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
            <br/>
            <h4>A S M Morshed</h4>
            <h5><span className="purple">Cloud Analyst | Solution Consultant</span></h5>
            <p style={{ marginTop: "20px" }}>
              <Link to="/resume-morshed">
                <Button variant="primary">
                  <CgFileDocument style={{ marginBottom: "4px" }} /> &nbsp; RESUME
                </Button>
              </Link>
            </p>
        </Col>
    {/*
        <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={Img1}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
        </Col>
        <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={Img1}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
        </Col>
    */}
      </Row>
	</Container>
  );
}

export default TremMembers;
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/logo.png";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function BannerLogo() {
  return (
    <Container fluid style={{ backgroundColor: '#0a0612' }}>
        <img src={logo} className="img-fluid" alt="brand" style={{ padding: '30px 0', width: '50%', height: 'auto' }}/>
    </Container>
  );
}

export default BannerLogo;
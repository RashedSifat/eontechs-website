import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/logo.png";



function BannerLogo() {
  return (
    <Container fluid style={{ backgroundColor: '#0a0612' }}>
        <img src={logo} className="img-fluid" alt="brand" style={{ padding: '30px 0', width: '50%', height: 'auto' }}/>
    </Container>
  );
}

export default BannerLogo;
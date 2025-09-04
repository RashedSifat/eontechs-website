import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Eon Tech Solutions <span className="purple">[ EonTechs.com ]</span> stands at the forefront of innovation 
            and sustainability in the digital landscape. We are committed to building 
             <span className="purple"> robust, scalable, and future-ready web solutions</span> that evolve with the 
            dynamic needs of businesses worldwide.<br /><br />

            At EonTechs, we offer end-to-end web development services—from ideation 
            and design to full-stack implementation and deployment. Our team is 
            equipped with the expertise to manage complex projects, ensuring<span className="purple"> technical 
            excellence, user-centric design, and seamless functionality</span>. We specialize 
            in crafting <span className="purple"> custom websites, e-commerce platforms, and web applications </span> 
            that align with each client’s brand and business goals.<br /><br />

            Our process combines <span className="purple"> strategic planning, agile project management, and 
            cutting-edge technologies</span> to deliver results that are not only technically 
            sound but also impactful. With a global client base and a passion for 
            excellence, EonTechs is dedicated to providing tailored digital solutions 
            that<span className="purple"> empower businesses and drive growth</span>.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

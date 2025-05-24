import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      return;
    }
    setFormError('');

    onSubmit({ name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <form onSubmit={handleSubmit}>
              {formError && <p style={{ color: 'red' }}>{formError}</p>}

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactForm;
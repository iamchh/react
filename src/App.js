import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <img
            src=" pic.jpg"
            alt="Profile"
            className="rounded-circle img-fluid"
          />
          <h1 className="mt-3">Hello</h1>
          <h5>A Bit About Me</h5>
          <p>
            I'm a Chham Bahadur Gurung from Gorkha originally. Recently I am living at capital city of Nepal i.e Kathmandu and just finished my graduation
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="warning">Resume</Button>
            <Button variant="danger">Projects</Button>
            <Button variant="info">Contact</Button>
          </div>
        </Col>
      </Row>
      <footer className="mt-5">
        <Row className="justify-content-between">
          <Col md={4}>
            <p><strong>Phone:</strong> +977-9860376853</p>
            <p><strong>Email:</strong> gurungchhambahadur3@gmail.com</p>
          </Col>
          <Col md={4} className="text-end">
            <p>Follow Me</p>
            <a href="https://www.linkedin.com/in/chham-bahadur-gurung-b844b322a/">linkedin<i className="bi bi-linkedin"></i></a>
          </Col>
        </Row>
        <p className="text-center mt-3">
          © 2025 By cbg 
        </p>
      </footer>
    </Container>
  );
}

export default App;
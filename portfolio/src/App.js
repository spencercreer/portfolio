import React from "react";
import Nav from "./components/Nav"
import Container from "./components/Container";
import Intro from "./components/Intro";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import Form from "./components/Form";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Container fluid>
        <Intro />
      </Container>
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Card
              src="./assets/img/switzerland.jpg"
              alt="Spencer paragliding in the Swiss Alps."
            />
          </Col>
          <Col size="md-3">
            <Card
              src="./assets/img/code.jpg"
              alt="A blue screen with computer code."
            />
          </Col>
          <Col size="md-3">
            <Card
              src="./assets/img/military_satellite.jpg"
              alt="Soldier with a laptop working on a satelitte antenna."
            />
          </Col>
          <Col size="md-3">
            <Card
              src="./assets/img/sweden.jpg"
              alt="A small fishing pier with fishing boats on a dock"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Form />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav"
import Container from "./components/Container";
import Intro from "./components/Intro";
import Row from "./components/Row";
import Col from  "./components/Col";
import Card from "./components/Card"
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
            <Card />
          </Col>
          <Col size="md-3">
            <Card />
          </Col>
          <Col size="md-3">
            <Card />
          </Col>
          <Col size="md-3">
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

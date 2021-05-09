import React, { Component } from 'react'
import Nav from "../components/Nav"
import Container from "../components/Container";
import Intro from "../components/Intro";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import cards from "../intro-cards.json"


export default class Landing extends Component {
    state = {
        cards
      };
      render() {
        return (
          <div>
            <Nav />
            <Container fluid>
              <Intro />
            </Container>
            <Container fluid>
              <Row>
                {this.state.cards.map(card => (
                  <Col size="md-3">
                    <Card
                      title={card.title}
                      src={card.src}
                      alt={card.alt}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
            <Container>
              <Form />
            </Container>
            <Footer />
          </div>
        );
      }
}


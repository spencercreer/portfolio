import React, { Component } from 'react';
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";
import Container from "../components/Container/Cointainer";
import Intro from "../components/Intro/Intro";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import IntroCard from "../components/IntroCard/IntroCard";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import cards from "../intro-cards.json";


export default class Landing extends Component {
    state = {
        cards
      };
      render() {
        return (
          <div>
            <PortfolioNav />
            <Container fluid>
              <Intro />
            </Container>
            <Container fluid>
              <Row>
                {this.state.cards.map(card => (
                  <Col size="md-3">
                    <IntroCard
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


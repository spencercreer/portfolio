import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";
import Intro from "../../components/Intro/Intro";
import IntroCard from "../../components/IntroCard/IntroCard";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import introCards from "../../intro-cards.json";


export default class Home extends Component {
    state = {
        introCards
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
                {this.state.introCards.map(card => (
                  <Col md={3} className="px-0">
                    <IntroCard
                      key={card.id}
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


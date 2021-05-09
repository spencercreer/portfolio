import React, { Component } from 'react'
import Nav from "../components/Nav/Nav"
import Container from "../components/Container/Cointainer";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import DevCard from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import devCards from "../web-dev-cards.json"


export default class Webdev extends Component {
    state = {
        devCards
      };
      render() {
        return (
          <div>
            <Nav />
            <div className="card-columns">
              <Row>
                {this.state.devCards.map(card => (
                  <Col size="md-3">
                    <DevCard
                      title={card.title}
                      src={card.src}
                      alt={card.alt}
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <Footer />
          </div>
        );
      }
}
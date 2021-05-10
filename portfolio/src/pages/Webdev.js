import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Container from "../components/Container/Cointainer";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
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
        <Jumbotron>
          {this.state.devCards.map(card => (
            <PortfolioCard
              key={card.id}
              title={card.title}
              src={card.src}
              alt={card.alt}
              description={card.description}
              url={card.url}
              repo={card.github.name}
              link={card.github.link}
            />
          ))}
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}
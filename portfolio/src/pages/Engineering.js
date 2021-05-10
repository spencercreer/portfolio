import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Container from "../components/Container/Cointainer";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import Footer from "../components/Footer/Footer";
import engCards from "../eng-cards.json";


export default class Engineering extends Component {
  state = {
    engCards
  };
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          {this.state.engCards.map(card => (
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

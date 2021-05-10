import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, CardColumns } from 'react-bootstrap';
import PortfolioNav from "../components/PortfolioNav/PortfolioNav";
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
        <PortfolioNav />
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">Mechanical Engineering</h1>
            <p className="lead">I am passionate about making tools that solve problems, improve efficiency, or make life more enjoyable. I have found that a powerful way to do this is through software and web development.</p>
            <p className="lead">This webpage contains links to several web applications that I have created. For more information on each application, and to view my full portfolio, checkout my GitHub account.</p>
            <div className="mb-3">
              <a className="text-primary link-text" href="https://github.com/" target="_blank"><i className="fa fa-github link-git"></i> spencercreer</a>
            </div>
            <CardColumns>
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
            </CardColumns>
          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

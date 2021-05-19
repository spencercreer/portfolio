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
              <Row>
                <Col md={7}>  
                <div>
                    <h1 class="display-4">About Me</h1>
                    <p class="lead"></p>
                    <div class="px-3">
                        <section class="">
                            <div>
                                I was born in Castro Valley, California to Brad and Michele Creer. I am the third of six children. At age seven, my family moved to Utah where I grew up. I graduated with honors and a 4.0 GPA from Lone Peak high school.<br /><br />
                                <img class="img-fluid mr-2 mb-2 text-center" src="../assets/img/neuschwan_castle.jpg" alt="Neuschwanstein Castle located in southern Germany." style={{maxHeight: "175px", float: "left"}} />
          From 2009 to 2011, I performed service for the Church of Jesus Christ of Latter-Day Saints in southern Germany, Austria, and Switzerland.  I learned the German language and gained a love for the German culture. <br /><br />
                            </div>
                            <div>
                                I attended Brigham Young University from 2012 to 2018 and graduated with a bachelor's degree in Mechanical Engineering. I also received a minor in German and a minor Global Business and Literacy. I have continued my education by participating in classes and conferences, and am currently attending a full-stack web development bootcamp at the University of Utah.<br /><br />

                                <img class="img-fluid float-right ml-2 mb-2" src="../assets/img/byu.jpg" alt="Brigham Young campus and Y mountain." style={{maxWidth: "300px"}} />

        I have spent the majority of my professional career in business and sales roles. From 2014 to 2018, I worked as a sales manager for New Star Communications, a DirecTv dealer. I was the 2014 rookie sales representative of the year and later led top performing sales teams in Texas, Missouri, and Ohio. After graduating from BYU, I have combined my sales and engineering background in multiple technical sales roles. I currently work as a Sales Engineer for Moxtek, Inc, a manufacturer of advanced nano-optical and X-ray components.<br /><br />

        In December 2018, I married my best friend and wife Lyndsey in Gilbert Arizona. Lyndsey graduated from BYU with a bachelor's of arts in Philosopy and a minor in logic. She will be going to law school to become a county prosecutor. We enjoy cooking, exercising, and being outdoors together.
      </div>
                        </section>
                    </div>
                </div>
            </Col>
                <Col md={5}>
              <Form />
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        );
      }
}


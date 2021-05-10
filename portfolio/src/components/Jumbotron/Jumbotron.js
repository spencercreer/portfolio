import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';

export default function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid pb-0 mb-0">
            <div className="container">
                <h1 className="display-4">Web Development</h1>
                <p className="lead">I am passionate about making tools that solve problems, improve efficiency, or make life more enjoyable. I have found that a powerful way to do this is through software and web development.</p>
                <p className="lead">This webpage contains links to several web applications that I have created. For more information on each application, and to view my full portfolio, checkout my GitHub account.</p>
                <div className="mb-3">
                    <a className="text-primary link-text" href="https://github.com/" target="_blank"><i className="fa fa-github link-git"></i> spencercreer</a>
                </div>
                <CardColumns>
                {props.children}
                </CardColumns>
            </div>
        </div>
    )
}

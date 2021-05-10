import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
    return (
        // Navbar
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="./index.html">Spencer Creer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/web-development">Web Development</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/engineering">Engineering</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Connect</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}
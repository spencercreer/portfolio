import React from 'react'

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
                <a className="nav-link" href="./develop/bio.html">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./develop/web_develop.html">Web Development</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./develop/mechanical_eng.html">Mechanical Engineering</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./develop/resume.html">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Connect</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}
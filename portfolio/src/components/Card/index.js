import React from 'react';
import "./style.css";

export default function index(props) {
    return (
        <div className="card text-center">
        <a href="./develop/bio.html" className="hover-overlay">
          <img src={props.src} className="card-img overlay-img"
            alt={props.alt}/>
          <div className="card-img-overlay text-center">
            <h5 className="card-title overlay-text text-center">About Me</h5>
            <p className="card-text"></p>
          </div>
        </a>
      </div>
    )
}

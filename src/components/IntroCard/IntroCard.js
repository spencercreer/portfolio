import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export default function Card(props) {
    return (
        <div className="card text-center">
        <a href="./develop/bio.html" className="hover-overlay">
          <img src={props.src} className="card-img overlay-img"
            alt={props.alt}/>
          <div className="card-img-overlay text-center">
            <h5 className="card-title overlay-text text-center">{props.title}</h5>
            <p className="card-text"></p>
          </div>
        </a>
      </div>
    )
}

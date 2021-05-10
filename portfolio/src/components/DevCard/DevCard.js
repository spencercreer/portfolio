import React from 'react';

export default function DevCard(props) {
    return (
      <div className="card">
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body p-0">
        <a href={props.url} target="_blank"
          className="btn btn-dark btn-block btn-lg">{props.title}</a>
        <div className="p-3">
          <p className="card-text mb-1">{props.description}</p>
          <a className="text-primary link-text" href={props.link} target="_blank"><i className="fa fa-github link-git"></i> {props.name}</a>
        </div>
      </div>
    </div>
    )
}
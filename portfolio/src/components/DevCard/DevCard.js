import React from 'react';

export default function DevCard(props) {
    return (
      <div class="card">
      <img src={props.src} class="card-img-top" alt={props.alt} />
      <div class="card-body p-0">
        <a href={props.url} target="_blank"
          class="btn btn-dark btn-block btn-lg" style="border-radius: 0px;">{props.title}</a>
        <div class="p-3">
          <p class="card-text mb-1">MVC Burgers is a SQL database of delicious burgers. You can make and devour burgers with this Node application that is deployed to Heroku.</p>
          <a class="text-primary link-text" href={props.github.link} target="_blank"
            style="font-size: 18px;"><i class="fa fa-github link-git" style="font-size:18px;"></i> {props.github.name}</a>
        </div>
      </div>
    </div>
    )
}
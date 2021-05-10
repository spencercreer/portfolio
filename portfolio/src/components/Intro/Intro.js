import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Intro() {
    return (
        <div id="intro" className="container-fluid">
            <div className="row">
                {/* Intro text */}
                <div className="col-md-8 px-4">
                    <h1 id="intro-title" className="display-1 mx-4 mt-5 mb-3">Hi, I'm Spencer</h1>
                    <p id="intro-text" className="lead m-4 pl-2">I am a full-stack web developer and mechanical engineer. I love
                    writing code that displays data in a useful way, and enjoy building tools that make life more enjoyable. I
              am an avid musician, hiker, and adventurer.</p>
                </div>
                {/* Intro profile image */}
                <div className="col-md-4">
                    <img className="img-fluid float-right" src="assets/img/profile.png" alt="Spencer with his wife Lyndsey" />
                </div>
            </div>
        </div>
    )
}

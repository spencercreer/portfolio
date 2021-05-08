import React from 'react'

export default function Intro() {
    return (
        <div id="intro" class="container-fluid">
            <div class="row">
                {/* Intro text */}
                <div class="col-md-8 px-4">
                    <h1 id="intro-title" class="display-1 mx-4 mt-5 mb-3">Hi, I'm Spencer</h1>
                    <p id="intro-text" class="lead m-4 pl-2">I am a full-stack web developer and mechanical engineer. I love
                    writing code that displays data in a useful way, and enjoy building tools that make life more enjoyable. I
              am an avid musician, hiker, and adventurer.</p>
                </div>
                {/* Intro profile image */}
                <div class="col-md-4">
                    <img class="img-fluid float-right" src="assets/img/profile.png" alt="Spencer with his wife Lyndsey" />
                </div>
            </div>
        </div>
    )
}

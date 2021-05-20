import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
    return (
      <div id="contact" class="container">
        <div class="row">
          <div class="col-md-9">
            <h1 class="display-4 contact-title">Contact me.</h1>
            <p className="lead">Send me an email at<a class="text-dark" href="mailto:spencercreer@gmail.com" target="_blank">spencercreer@gmail.com</a>
            </p>
            <p class="lead">Contact me through email, GitHub, or LinkedIn or send me a message through the following
              form.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p class="text-center">
              <a class="text-dark" href="mailto:spencercreer@gmail.com" target="_blank" style={{fontSize: "72px"}}><i
                  class="fa fa-envelope link-email"></i></a>
            </p>
          </div>
          <div class="col-4">
            <p class="text-center mt-4">
              <a class="text-dark" href="https://github.com/spencercreer" target="_blank"><i
                  class="fa fa-github link-git" style={{fontSize: "72px"}}></i></a>
            </p>
          </div>
          <div class="col-4">
            <p class="text-center">
              <a class="text-dark" href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank"
                style={{fontSize: "72px"}}><i class="fa fa-linkedin-square link-in"></i></a>
            </p>
          </div>
        </div>
        
        <div className="row px-5">
          <form className="col-md-12 py-2 px-0">
            
            <div className="form-row mb-1">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" required />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" required />
              </div>
            </div>
            <div className="form-row mb-1">
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <textarea rows="3" className="form-control" placeholder="Message" required></textarea>
              </div>
            </div>
            <div className="form-row mx-1 float-right">
              <button type="submit" className="btn btn-dark btn-lg mt-1">Send</button>
            </div>
          </form>
        </div>

      </div>
    )
}

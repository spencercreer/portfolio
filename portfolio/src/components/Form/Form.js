import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
    return (
        // Contact Form
        <div className="row px-2">
          <form className="col-md-12 py-2 px-0">
            {/* Name */}
            <div className="form-row mb-1">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" required />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" required />
              </div>
            </div>
            {/* Email */}
            <div className="form-row mb-1">
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" required />
              </div>
            </div>
            {/* Message */}
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
    )
}

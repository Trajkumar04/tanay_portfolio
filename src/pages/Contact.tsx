import React from 'react';
import '../css/Contact.css';


const Contact: React.FC = () => {

    return (
        <div className="container my-5">
          <h2 style={{ color: 'white' }} className="text-center mb-4">Contact Me</h2>
          <div className="card mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body text-center">
              <p className="card-text">
                If you would like to contact me, please feel free to reach out to me via email.
                Please also feel free to connect with me on LinkedIn or GitHub.  
              </p>
              <div className="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:your-email@example.com" className="text-primary">
                  tanay.rajkumar@gmail.com
                </a>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tanay-rajkumar-0a2930216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Trajkumar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Contact;
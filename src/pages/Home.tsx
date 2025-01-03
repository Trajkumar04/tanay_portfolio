import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../css/Home.css';

const Home: React.FC = () => {

  return (
    <div className="container mt-5">
      <div className="text-center my-5">
        <h1 className="text-primary">Tanay Rajkumar</h1>
        <p style={{ color: 'white' }}>
          I create complex programs involving machine learning and computer vision.
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 d-flex">
          <Card className="mb-4 flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Learn more about who I am and some of my experiences.
              </Card.Text>
              <Link to="/about" className="btn btn-primary mt-auto">
                About Me
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 d-flex">
          <Card className="mb-4 flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Explore my past and current projects.
              </Card.Text>
              <Link to="/projects" className="btn btn-primary mt-auto">
                Projects
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 d-flex">
          <Card className="mb-4 flex-fill">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>
                Learn how to contact me.
              </Card.Text>
              <Link to="/contact" className="btn btn-primary mt-auto">
                Contact Me
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

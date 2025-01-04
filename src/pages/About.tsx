import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/About.css';
import ProfilePic from '../assets/profile.jpg';

const languages = [
  'Java, and Python',
  'JavaScript & TypeScript',
  'HTML & CSS',
  'C/C++/C#',
  'Assembly Language',
  'Swift',
];

const technologies = [
  'Pandas and NumPy',
  'React and Angular',
  'TensorFlow and PyTorch',
  "Scikit-learn",
  'OpenCV',
  'Firebase',
  'Git',
  'Docker',
  'Linux and Unix',
  'Data Structures and Algorithms',
  'Ghidra',
  'Node.js',
];

const experiences = [
  {
    role: 'Intern',
    company: 'NCR Corporation',
    duration: 'June 2021 - May 2022',
    description: `
      Applied rigorous analytical thinking to repair printers, replacing and testing components such as printer shells, motherboards, and ink cartridges. 
      Averaged 50 printer repairs per week for clients including McDonalds and Dunkin, ensuring prompt delivery of repaired products.
      Enhanced efficiency in the receiving department by inputting and sorting product information into NCR servers, including item type, client name, and pending issues.`,
  },
];

const About: React.FC = () => {
  return (
    <div className="container mt-5">
      <Row className="align-items-center">
        <h1 className="text-center">About Me</h1>
        <Col md={6}>
          <Image src={ProfilePic} fluid className="profile-pic" />
        </Col>
        <Col md={6} className="text-container">
          <p style={{ color: 'white' }}>
            My name is Tanay Rajkumar. I am a junior at the Georgia Institute of Technology majoring in Computer Science.
            I have a passion for machine learning and cybersecurity, with a growing interest in computer vision.
            I am fascinated with the ways that computers can perceive and understand the world around them.
            I am currently seeking a summer internship in the field of machine learning, computer vision, or cybersecurity. <br />
            I am primarily a backend developer, with expertise in Java and Python. I have recently
            started learning frontend technologies such as React and Angular with the goal of becoming a full-stack developer.
            I also have experience with mobile application development with Android Studio, and am actively learning Swift for iOS development. <br />
            I am very adaptable and can quickly learn new technologies and programming languages. I am a quick thinker and can solve problems efficiently.
            I am a team player and have experience leading a team of developers to create a project, having done so for my Spotify Wrapper project. <br />

          </p>
        </Col>
      </Row>

      <h2 className="mt-4">Skills</h2>
      <ul className="list-group custom-list-group">
        {languages.map((language, index) => (
          <li key={index} className="list-group-item custom-list-item">
            {language}
          </li>
        ))}
      </ul>

      <h2 className="mt-4">Technologies Learned</h2>
      <ul className="list-group custom-list-group">
        {technologies.map((technology, index) => (
          <li key={index} className="list-group-item custom-list-item">
            {technology}
          </li>
        ))}
      </ul>

      <h2 className="mt-4">Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{experience.role} - {experience.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{experience.duration}</h6>
            <p className="card-text"> {experience.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;

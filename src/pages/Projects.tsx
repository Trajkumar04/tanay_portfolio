import React from 'react';
import '../css/Projects.css';

const past_projects = [
    {
      name: 'HandSignia',
      skills: 'MediaPipe, Machine Learning, Computer Vision, Deep Learning',
      duration: 'June 2024',
      url: 'https://sites.google.com/view/handsignia/home',
      description: `
        Trained an AI-model to recognize human hand gestures, resulting in a model with an F1-score of 73%. 
        Created an application that would display various visual effects on the user’s screen based on what hand gesture they were performing. `,
      image: 'src/assets/HandSignia.jpg',
    },
    {
      name: 'Spotify Wrapper',
      skills: 'Android Studio, FireBase, Scrum Project Development',
      duration: 'April 2024',
      url: 'https://sites.google.com/view/cs2340project2leo5/home',
      description: `
        Utilized Android Studio and Spotify API to develop a Spotify Wrapped app, allowing all users to view statistics such as favorite artist and most listened to tracks based on a month, 6 months, or a year.
        Lead the development of the applications backend, populating the application with data obtained from the Spotify API. 
        Created a website to showcase the application as well as the groups understanding of the agile design process. `,
      image: 'src/assets/SpotifyWrapper.png',
    },
    {
      name: 'Pen 2 Panel',
      skills: 'Auth0, Backend Development, Python, TypeScript',
      duration: 'Feburary 2024',
      url: 'https://github.com/AnganSamadder/Pen2Panel',
      description: `
        Won Auth0 sponsorship challenge at UGAHacks 9 by successfully integrating Auth0 authentication into the application.
        Applied analytical thinking to develop an application enabling users to convert their own stick drawings into a 10-panel superhero comic.
        Created a website to showcase the application as well as the groups understanding of the agile design process. `,
      image: 'src/assets/pen2panel.jpg',
    },
    {
      name: 'College Scheduler',
      skills: 'Android Studio, Java, Git, Agile Project Development',
      duration: 'Feburary 2024',
      url: 'https://sites.google.com/view/collegeschedulerappgroup19/home',
      description: `
        Utilized Android Studio to develop an academic schedule management app, showcasing analytical skills in designing and implementing features such as class schedules, assignment details, exam details, and task management.
        Created a website to demonstrate app functionality and a modern Android Studio Hedgehog tutorial. `,
      image: 'src/assets/CollegeScheduler.png',
    },
  ];

const current_projects = [
  {
    name: 'Portfolio Website',
    duration: 'January 2025 - Present',
    description: `
      This website is one that I will constantly be updating.
      I will be adding new projects to the projects page, updating my experiences, and adding new skills to the skills page.
      The goal of this website is to showcase my skills and projects to potential employers.
      This website also gives me the opportunity to practice my web development skills.
      The end date for this project is unknown, as I will be updating it constantly.`,
  },
  {
    name: 'Notes Generator',
    duration: 'August 2024 - Present',
    description: `
      Developing a web application that will generate notes for students while they are watching a video.
      Utilizing machine learning and natural language processing to analyze the video and generate notes. 
      The end date for this project should be around mid-2025`,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mt-5">
        <h1 className="text-primary">Projects</h1>
        <p style={{ color: 'white' }}>
            Here are some of the projects that I have either worked on or am currently working on.
        </p>

        <h2 className="mt-4">Current Projects</h2>
        {current_projects.map((project, index) => (
        <div key={index} className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.duration}</h6>
                <p className="card-text">{project.description}</p>
            </div>
        </div>
        ))}

        <h2 className="mt-4">Past Projects</h2>
              {past_projects.map((project, index) => (
                  <div key={index} className="card my-3">
                      <div className="row g-0">
                          <div className="col-md-4">
                              <img
                                  src={project.image}
                                  alt={project.name}
                                  className="img-fluid rounded-start"
                              />
                          </div>
                          <div className="col-md-8 content-section">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary"
                                    >
                                        {project.name}
                                    </a>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{project.skills}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{project.duration}</h6>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                      </div>
                  </div>
              ))}
    </div>
  );
};

export default Projects;



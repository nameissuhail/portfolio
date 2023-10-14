import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'Project 1', url: 'https://github.com/nameissuhail/wd.git' },
  { name: 'Project 2', url: 'https://github.com/nameissuhail/mernstack1.git' },
  { name: 'Project 2', url: 'https://github.com/nameissuhail/mernstack2.git' },
  // Add more projects and URLs as needed
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={project.url}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

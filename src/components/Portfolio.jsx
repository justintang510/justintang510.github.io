import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Projects from '../Projects';

const Portfolio = () => (
  <div id="portfolio" className="item">
    <h2>Portfolio</h2>
    <div id="projects-container">
      {Projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          desc={project.desc}
          stack={project.stack}
          url={project.url}
          image={project.image}
        />
      ))}
    </div>
  </div>
);

export default Portfolio;

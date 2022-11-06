import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const Portfolio = ({ projects }) => (
  <div id="portfolio" className="item">
    <h2>Portfolio</h2>
    <div id="projects-container">
      {projects.map((project) => (
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

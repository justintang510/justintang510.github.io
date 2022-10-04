import React from 'react';
import ProjectCard from './ProjectCard';
import Projects from '../Projects';
import GitHubIcon from '@mui/icons-material/GitHub';

const Portfolio = () => {
  return (
    <div id="portfolio" className="item">
      <h2>Portfolio</h2>
      <div id="projects-container">
        {Projects.map((project, key) =>
          <ProjectCard
            key={key}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            url={project.url}
            image={project.image}
          />
        )}
      </div>
    </div>
  )
}

export default Portfolio;
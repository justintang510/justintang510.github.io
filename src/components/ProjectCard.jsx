import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconStyle = {
  marginLeft: '6px',
  fontSize: '20px',
};

const ProjectCard = ({ name, desc, stack, url, image }) => (
  <div className="project" onClick={() => window.open(url)}>
    <div className="project-info">
      <img className="project-image" src={image} />
      <div className="project-name">
        {name}
        <GitHubIcon sx={iconStyle} />
      </div>
      <div className="project-desc">{desc}</div>
    </div>
    <div className="tech-stack">{stack}</div>
  </div>
);

export default ProjectCard;

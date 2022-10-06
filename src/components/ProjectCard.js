import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconStyle = {
  fontSize: '16px',
}

const ProjectCard = ({ name, desc, stack, url, image }) => {
  return (
    <div className="project-card" onClick={event =>  window.open(url)}>
      <div className="project-info">
        <img className="project-image" src={image}></img>
        <div className="project-name">{name} <GitHubIcon sx={iconStyle}/> </div>
        <div className="project-desc">{desc}</div>
      </div>
      <div className="tech-stack">{stack}</div>
    </div>
  )
}

export default ProjectCard;
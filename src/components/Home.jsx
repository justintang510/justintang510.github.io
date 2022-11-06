import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
  fontSize: '40px',
  color: '#3D3D3D',
  marginTop: '10px',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    color: '#264653',
    top: '-7px',
  },
};

const Home = ({ name, title, links }) => (
  <div id="home" className="item">
    <h1>{name}</h1>
    {title}
    <div className="icons">
      <EmailIcon onClick={() => window.open(links.email)} sx={iconStyle} />
      <LinkedInIcon onClick={() => window.open(links.linkedin)} sx={iconStyle} />
      <GitHubIcon onClick={() => window.open(links.github)} sx={iconStyle} />
    </div>
  </div>
);

export default Home;

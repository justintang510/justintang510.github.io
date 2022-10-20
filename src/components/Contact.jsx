import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
  fontSize: '120px',
  color: '#3D3D3D',
  marginTop: '10px',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    color: '#264653',
    top: '-10px',
  },
};

const Contact = () => (
  <div id="contact" className="item">
    <h2>Contact</h2>
    <div className="icons">
      <EmailIcon onClick={() => window.open('mailto:tangjustin2@gmail.com')} sx={iconStyle} />
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/justintang510/')} sx={iconStyle} />
      <GitHubIcon onClick={() => window.open('https://github.com/justintang510/')} sx={iconStyle} />
    </div>
  </div>
);

export default Contact;
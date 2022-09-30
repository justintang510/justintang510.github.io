import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
  fontSize: '40px',
  color: '#2C2C2C',
  marginTop: '10px',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    color: '#264653',
    top: '-7px',
  }
}

const Home = () => {
  return (
    <>
      <h1>Justin Tang</h1>
      Software Developer
      <div className="icons">
        <EmailIcon onClick={event =>  window.open('mailto:tangjustin2@gmail.com')} sx={iconStyle}/>
        <LinkedInIcon onClick={event =>  window.open('https://www.linkedin.com/in/justintang510/')} sx={iconStyle}/>
        <GitHubIcon onClick={event =>  window.open('https://github.com/justintang510/')} sx={iconStyle}/>
      </div>
    </>
  )
}

export default Home;
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconStyle = {
  fontSize: '16px',
  color: 'black',
}

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <div id="portfolio">
          <div class="project" onClick={event =>  window.open('https://github.com/Klippan-BO')}>
            <div class="project-info">
                <img class="project-image" src="https://i.imgur.com/2knfZOL.png"></img>
              <div class="project-name">Trail Companions <GitHubIcon sx={iconStyle}/> </div>
              <div class="project-desc">A full stack web application providing a community for hikers and crowd-sourced reviews for trails.
              Users may login with Google Sign-In, find information on trails, leave comments, upload photos, create personal profiles, add friends and plan events.</div>
            </div>
            <div class="tech-stack">React | Node.js | PostgreSQL | AWS | Next.js | Firebase</div>
          </div>

          <div class="project" onClick={event =>  window.open('https://github.com/Baratheon-Stags/front-end-capstone')}>
            <div class="project-info">
              <img class="project-image" src="https://i.imgur.com/DNIqs11.png"></img>
              <div class="project-name">Baratheon E-Commerce UI <GitHubIcon sx={iconStyle}/></div>
              <div class="project-desc">A front end web application built to interact with modern e-commerce APIs. Includes an image gallery/carousel, product descriptions, styles and sizes, bookmarking and a reviews and ratings system.</div>
            </div>
            <div class="tech-stack">React | Node.js | webpack | Babel | Styled Components</div>
          </div>

          <div class="project" onClick={event =>  window.open('https://github.com/Samosas-SDC/reviews-api')}>
            <div class="project-info">
              <img class="project-image" src="https://i.imgur.com/vRy0TR5.png"></img>
              <div class="project-name">Atelier E-Commerce Systems Design <GitHubIcon sx={iconStyle}/></div>
              <div class="project-desc">A server, database, and API scaled to support thousands of requests per second, as well as 30M+ records of data. Utilizes a NGINX load balancer that distributes incoming traffic across several AWS EC2 instances in order to handle increases in throughput.</div>
              </div>
              <div class="tech-stack">Node.js | PostgreSQL | AWS | NGINX | Postman | k6 | Loader.io</div>
          </div>
        </div>
    </>
  )
}

export default Portfolio;
import React from 'react';

const Bio = (
  <>
    <p>I am a software developer specializing in JavaScript, React, CSS, Node.js and systems design. I am passionate about building user-friendly applications and designing aesthetic user interfaces.</p>
    <p>I've previously worked as a Senior Quality Analyst for the Monetization Support Team at Meta. My experience at Meta inspired me to pursue software engineering so that I can solve more complex problems and leave a bigger impact on the industry.</p>
    <p>When I'm not programming, I enjoy discovering new music, watching esports and reading about completely random topics on Wikpedia. I also coach a competitive VALORANT team in my free time.</p>
  </>
);

const About = () => (
  <div id="about" className="item">
    <h2>About Me</h2>
    {Bio}
  </div>
);

export default About;
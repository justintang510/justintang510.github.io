import React from 'react';

const About = ({ bio }) => (
  <div id="about" className="item">
    <h2>About Me</h2>
    {bio.map((paragraph) => <p>{paragraph}</p>)}
  </div>
);

export default About;

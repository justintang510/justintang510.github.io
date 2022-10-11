import React from 'react';
import { Bio } from '../Bio';

const About = () => (
  <div id="about" className="item">
    <h2>About Me</h2>
    {Bio.map((paragraph) => <p>{paragraph}</p>)}
  </div>
);

export default About;

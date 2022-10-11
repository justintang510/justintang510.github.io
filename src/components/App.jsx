import React from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

const App = () => (
  <>
    <Nav />
    <div className="main">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  </>
);

export default App;

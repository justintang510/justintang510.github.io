import React from 'react';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <div id="home" className="item">
          <Home />
        </div>
        <div id="about" className="item">
          <About />
        </div>
        <div id="portfolio" className="item">
          <Portfolio />
        </div>
        <div id="contact" className="item">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
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
        <div className="item">
          <Home />
        </div>
        <div className="item">
          <About />
        </div>
        <div className="item">
          <Portfolio />
        </div>
        <div className="item">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
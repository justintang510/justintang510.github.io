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
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App;
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
      <div class="main">
        <div class="item">
          <Home />
        </div>
        <div class="item">
          <About />
        </div>
        <div class="item">
          <Portfolio />
        </div>
        <div class="item">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
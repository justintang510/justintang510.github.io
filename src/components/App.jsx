import React from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Info from '../Info';

const App = () => (
  <>
    <Nav />
    <div className="main">
      <Home
        data-testid="Home-1"
        name={Info.name}
        title={Info.title}
        links={Info.links}
      />
      <About
        data-testid="About-1"
        bio={Info.bio}
      />
      <Portfolio
        data-testid="Portfolio-1"
        projects={Info.projects}
      />
      <Contact
        data-testid="Contact-1"
        links={Info.links}
      />
    </div>
  </>
);

export default App;

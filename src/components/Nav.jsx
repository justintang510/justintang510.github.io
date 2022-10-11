import React from 'react';
import { Navbar, NavLinks } from './styled/Navbar.styled';

const Nav = () => (
  <Navbar>
    <NavLinks>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </NavLinks>
  </Navbar>
);

export default Nav;

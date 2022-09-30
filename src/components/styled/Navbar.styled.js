import styled from 'styled-components';

const Navbar = styled.header`
  display: flex;
  gap: 0;
  justify-content: right;
  align-items: center;
  height: 75px;
  background-color: #264653;
  width: 100vw;
  margin: 0;
  box-shadow: 0 3px 10px rgba(0,0,0,.75);
  position: sticky;
  top: 0%;
  z-index: 9999;
  padding: 0;
`;

const Logo = styled.h2`
  color: white;
  font-size: 2.75em;
  text-shadow: 2px 2px 2px rgba(0,0,0,.75);

  & > a {
    color: white;
    text-decoration: none;
    transition: all .2s ease;
    position: relative;
  }

  @media (max-width: 900px) {
    & > a {
      font-size: .8em;
    }
  }

  & > a:focus {
    outline: none;
  }

  & > a:visited {
    color: white;
  }
`;

const NavLinks = styled.ul`
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 3em;

  @media (max-width: 620px) {
    display: none;
  }

  & > li a {
    color: white;
    text-decoration: none;
    transition: all .2s ease;
    position: relative;
  }

  & > li a:focus {
    outline: none;
  }

  & > li {
    margin-left: 1.5em;
  }


  & > li a::after {
    content: '';
    height: 2px;
    background-color: white;
    width: 100%;
    transform-origin: center;
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all .2s ease;
  }

  & > li a:hover::after {
    opacity: 0.5;
  }
`;

export { Navbar, Logo, NavLinks };

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  body {
    margin: 0;
    font-size: 20px;
    line-height: 1.35;
    background-color: #E2CCAD;
    overflow-x: hidden;
    font-family: 'Poppins';
    color: #2C2C2C;
    font-display: block;
  }

  #home {
    font-family: 'Poppins';
    font-size: 20px;
  }

  #projects-container {
    display: flex;
    flex-direction: row;
    width: 80vw;
    gap: 45px;
    height: 60vh;
    max-height: 550px;
    min-width: 1000px;
    margin-top: 25px;
  }

  #about {
    width: 65vw;
  }

  .project {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 15px;
    border: 2px solid rgba(61,61,61,.75);
    border-radius: 10px;
    width: 33%;
    justify-content: space-between;
    box-shadow: 0 10px 15px rgba(0,0,0,.75);
    background-color: white;
  }

  .project:hover {
    cursor: pointer;
    box-shadow: 0 35px 20px rgba(38,70,83,.75);
    border: 2px solid #264653;
    position: relative;
    top: -15px;
    transition: all .2s ease;
    color: #264653;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 16px;
  }

  .project-name {
    margin: 8px 0 5px;
    font-size: 1.5em;
  }

  .project-image {
    display: flex;
    height: 100%;
  }

  .project-desc {
    font-size: 1em;
  }

  .tech-stack {
    font-size: .5em;
  }

  .container {
    position: absolute;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 80vw;

  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 50vw;
    margin: auto;
    scroll-snap-align: center;
  }

  .contact {
    flex-direction: row;
  }


  img {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: '#f5f5f5';
    font-family: 'Poppins';
  }

  h1 {
    color: #3D3D3D;
    text-align: center;
    font-size: 4rem;
    text-shadow: 2px 2px rgba(0, 0, 0, .25);
  }
`;

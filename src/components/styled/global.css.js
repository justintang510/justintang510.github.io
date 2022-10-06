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

  #home {
    font-family: 'Poppins';
    font-size: 20px;
  }

  #portfolio {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #projects-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 85vw;
    gap: 45px;
    height: 60vh;
    max-height: 550px;
    min-width: 950px;
    margin-top: 25px;
  }

  #about {
    width: 90vw;
    max-width: 920px;
  }

  .icons {
    margin-top: 5px;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 15px;
    border: 2px solid rgba(61,61,61,.75);
    border-radius: 10px;
    width: 33%;
    height: 500px;
    justify-content: space-between;
    box-shadow: 0 10px 15px rgba(0,0,0,.75);
    background-color: white;
  }

  .project-card:hover {
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
    margin: 12px 0 12px;
    font-size: 1.5em;
  }

  .project-image {
    display: flex;
    height: 100%;
    border: 1px solid rgba(61,61,61,.35);
  }

  .project-desc {
    font-size: 1em;
  }

  .tech-stack {
    font-size: 14px;
  }

  .container {
    position: absolute;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 80vw;

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
    color: #3D3D3D;
    font-family: 'Poppins';
    text-shadow: 1px 1px rgba(0, 0, 0, .25);
  }

  h1 {
    color: #3D3D3D;
    text-align: center;
    font-size: 4rem;
    text-shadow: 1px 1px rgba(0, 0, 0, .25);
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  #portfolio {
    display: flex;
    flex-direction: row;
    width: 80vw;
    gap: 15px;
    height: 50vh;
    max-height: 500px;
    margin-top: 25px;
  }

  .project {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 2px solid black;
    border-radius: 5px;
    width: 33%;
    justify-content: space-between;
    box-shadow: 0 10px 15px rgba(0,0,0,.75);
  }

  .project:hover {
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(38,70,83,.75);
    border: 2px solid #264653;
    position: relative;
    top: -5px;
    transition: all .2s ease;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 16px;z
  }

  .project-name {
    font-size: 1.5em;
  }

  .project-image {
    display: flex;
    height: 100%;
  }

  .project-desc {
    font-size: .75em;
  }

  .tech-stack {
    font-size: .6em;
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
    height: 90vh;
    width: 40vw;
    margin: auto;
    scroll-snap-align: center;
  }

  .contact {
    flex-direction: row;
  }

  body {
    margin: 0;
    font-size: 20px;
    line-height: 1.35;
    background-color: '#292A30';
    color: '#f5f5f5';
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', cursive;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;
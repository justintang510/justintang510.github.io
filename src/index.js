import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import GlobalCSS from './components/styled/global.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <>
    <GlobalCSS />
    <App />
  </>,
);

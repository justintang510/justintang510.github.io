import React from 'react';
import App from './components/App';
import GlobalCSS from './components/styled/global.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <>
  <GlobalCSS />
  <App />
  </>
);
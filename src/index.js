import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import Style from './style.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <>
    <App />
  </>,
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';  // Make sure this line is present

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
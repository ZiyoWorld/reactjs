import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentsList from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentsList>
      <App />
    </StudentsList>
  </React.StrictMode>
);




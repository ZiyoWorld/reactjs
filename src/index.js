import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  Mode from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mode>
      <App />
    </Mode>
  </React.StrictMode>
);




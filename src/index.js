import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gazz from "./App"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gazz  title={{status: 'active', title:'React' }} >
     I'm React Develeopper
    </Gazz>
  </React.StrictMode>
);




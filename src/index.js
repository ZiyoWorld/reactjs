import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Roots from './root'; 
import { Context } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Roots />
    </Context>
  </React.StrictMode>
);




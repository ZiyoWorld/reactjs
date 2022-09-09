import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './State';
import {data} from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State data={data} />
  </React.StrictMode>
);






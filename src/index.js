import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './State';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);





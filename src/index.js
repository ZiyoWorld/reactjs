import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import fruits from './fruits';
import Fruit from "./Fruit";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
            <h1 className='header'>Fruit</h1>
    <section className='main' id='main'>
    {
      fruits.map( (value)=> {
        return(
          <Fruit data={value} />
        )
      })
    }

    </section>
    
    </div>
    
  </React.StrictMode>
);




import React from 'react'
import { useState } from 'react';

const Controlled = () => {

    const [title, setTitle] = useState('');
    console.log("Controlled");
  return (
    <div>
        <h1>Controlled {title}</h1>
        <input type="text"
        onChange={(e)=> setTitle(e.target.value)}
        />
        <hr />


    </div>
  )
}
export default Controlled;

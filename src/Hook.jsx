
import React, { useState } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('webbrain');

  
  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks Components</h1>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <input
        type='text'
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Hooks;
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(`${counter} toq ham juft ham emas`);
  
  const plus = ()=>{
    setTimeout(()=>{
      setCounter(counter + 1);
        console.log("before");
      setState((counter + 1) % 2 === 0 ? "juft son" : "toq son" );
    }, 1000)
  }
  console.log("re-render");
  
  return (
    <div>
      <h1>React 17</h1>
      <h1>Counter {state}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;

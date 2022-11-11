import React, {useState, useReducer} from "react";

const Hooks = ()=>{
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mirziyod');

  const reducer = (state, action)=> {
    switch(action.type){
      case 'plus' : return state + 1;
      case 'minus' : return state - 1;
      case 'byamount' : return state + action.payload;
      default: return state; 
    }
  }

  const [counter, dispatch] = useReducer( reducer, 0);
  const [change, setChange] = useState(1);
  function onHandler(e){
    setChange(e.target.value);
  }

  


  
  return(
    <div style={{flex: 1}}>
      <h1>Hooks Component</h1>
      <h1>Count: {count}</h1>
      <h1>Counter: {counter}</h1>
      <select name="" id=""
      onChange={onHandler} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={()=>dispatch({type: "byamount", payload: Number(change),})}>{change}</button>

      <button onClick={()=>dispatch({type: "minus"})}>-</button>
      <button onClick={()=>dispatch({type: "plus"})}>+</button>
      <input type="text" value={name} 
      onChange={({target})=> setName(target.value)}
      />
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(count + 1)}>+</button>
    </div>
  )
};

export default Hooks;
import React, { useRef } from 'react'

const UnControlled = () => {
  
  const handler = useRef('');
  console.log("UnControlled");
  return (

    <div>
      <h1> UnControlled </h1>
      <input type="text"
      ref={handler}
      />
      <button onClick={()=> {
        alert(handler.current.value);
      }
        }>Submit</button>    
    </div>
  )
}
export default UnControlled;

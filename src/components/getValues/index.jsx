import React, {useState, useDebugValue} from 'react';

export function useLocalStorage(){
    const [value, setValue] = useState('');

   // useDebugValue(value, (e)=> e);
    useDebugValue(value, (e)=> getSlowValue(e));


    return [value, setValue];
   
   
    
}

const getSlowValue = (value)=>{
    for(let i = 1; i < 20000000000000; i++){
      return value;
    }
}
export default useLocalStorage;
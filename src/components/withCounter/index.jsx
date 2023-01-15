import React, {useState} from "react";
const UpdateWith = (Component)=>{
    
    const Updated = ()=>{
        const [count, setCount] = useState(0);

         const increment = ()=>{
            setCount((prev)=> prev + 1);
        }
        return <Component count={count} setCount={increment}  />
    }
    return Updated;
}

export default UpdateWith;
// const getProp = (name)=>{
//     console.log(name, 'test');
// }
// getProp('hi there');
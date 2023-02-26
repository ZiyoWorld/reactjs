import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../../redux/Counter";
import { getStudent } from "../../redux/Student";

function UseRedux() {

    const counter = useSelector((store) => store.counter);
    const store = useSelector((store) => store.student);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getStudent());
    },[]);
    
   
    return <div>
        <h1>UseRedux {counter.data}</h1>
        <div>

        <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement({a: 5}))}>-</button>
            
            {
             store.student.map((value) => {
                    return (
                    <h1 key={value.id}>
                    {value.id} . {value.name}
                    </h1>
                    )
                })
            }
        </div>
  </div>;
}

export default UseRedux;

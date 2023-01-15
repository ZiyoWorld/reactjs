import React, {useEffect, useId} from 'react'

const List = () => {

    const Id = useId();
    useEffect( ()=>{

        fetch('https://jsonplaceholder.typicode.com/todos');
    }, [])
   return <h1>{Id}  Data Loading</h1>
}

export default List;
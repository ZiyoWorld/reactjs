import React, {useState, useEffect } from 'react';

function Fetch() {
    const [students, setStudents] = useState([]);
    const [selected, setSelected] = useState({});


    const getUsers = (id)=>{
        
       return (fetch(`https://jsonplaceholder.typicode.com/users${id? `/${id}` : ''} `, {
            //method: "GET"
        })
        .then( (res)=> res.json())
        )
    }

    useEffect( ()=>{
       getUsers().then( (res)=> setStudents(res));
    }, []);

    const getInfo = (id)=>{
        getUsers(id).then( (res)=>{
            setSelected(res);       
        })
    }

  return (
    <div style={{display: 'flex'}}>
        <h1>Students List</h1>
        <div style={{flex: 1}}>
        {
            students.map( (value)=>{
                return(
                    <h2 key={value.id}>Name: {value.id} {value.name} <button onClick={()=>getInfo(value.id)}>getInfo</button></h2>
                    )
                })
            }
        </div>
        <div style={{flex: 1}}>
            <div key={selected?.id}>
                <h1>Name: {selected?.name}</h1>
                <h2>Username: {selected?.username}</h2>
                <h3>Email: {selected?.email}</h3>
            </div>    
        </div>
    </div>
  )
}

export default Fetch;
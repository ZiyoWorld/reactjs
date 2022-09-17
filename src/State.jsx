import React, {Component} from "react";

import {student} from './moke';

class State extends Component {

    state = { 
         count: 0,
         data: student,
         name: "Mirziyod",
         surname: "Sunatillayev",
         
     }
    render() { 
        const {count, name, surname} = this.state;
        
        const plus =()=>{if(count < 10) {this.setState({count: count + 1})}};
        const minus =()=>{if(count > 0){ this.setState({ count: count - 1})}};

        const onSelect = (e)=>{
            console.log(e.target.value)
        }
        const onCheck = (e)=>{
            console.log(e.target.checked)
        }
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const onFilter = (e)=>{
            console.log(e.target.value);
           let res = student.filter( (value)=> value.name.includes(e.target.value));
           this.setState({
            data: res,
           })
        }

        return ( 
            <>
            <h1>Counter: {count}</h1>
            <button onClick={plus}  >+</button>
            <button onClick={minus} >-</button>
            <h1>Name: {name}</h1>
            <h1>SurName: {surname}</h1>
            <input type="text" name="name" placeholder="name" onChange={onChange} />
            <input type="text" name="surname" placeholder="surname" onChange={onChange} />
            <hr />
            <select onClick={onSelect}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <input type="checkbox" onChange={onCheck} />
            <input type="radio" onChange={onCheck} />
            <hr />
            <input type="text" placeholder="filter" onChange={onFilter} />
            {
                this.state.data.map(({id, name, status})=>{
                    return(
                        <h1 key={id}>{id} {name} {status}</h1>
                    )
                })
            }
            </>
         );
    }
}
 
export default State;
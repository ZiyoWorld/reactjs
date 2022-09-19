import React, {Component} from "react";

import {student} from './moke';

class State extends Component {

    state = { 
         count: 0,
         data: student,
         name: "Mirziyod",
         status: "IT",
         
     }
    render() { 
        const {count, name, status} = this.state;
        
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
        const onDelete = (id)=>{
          console.log(id);
          let res = this.state.data.filter( (value)=> value.id !== id);
          this.setState({
            data: res,
          })
        }
        const onAdd = ()=>{
        let user = {
            id: Date.now(),
            name: name,
            status: status,
        }
        this.setState({
            name: '',
            status: ''
        });
        console.log(user);
        }

        return ( 
            <>
            <h1>Counter: {count}</h1>
            <button onClick={plus}  >+</button>
            <button onClick={minus} >-</button>
            <h1>Name: {name}</h1>
            <h1>SurName: {status}</h1>
            
            <hr />
            <select onClick={onSelect}>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <input type="checkbox" onChange={onCheck} />
            <input type="radio" onChange={onCheck} />
            <hr />
            <h3>Filter</h3>
            <label htmlFor="filter">Filter</label>
            <input type="text" id="filter" placeholder="filter" onChange={onFilter} />
            <hr />
            <h3>Add</h3>
            <label htmlFor="addname">Add name</label>
            <input type="text" name="name" placeholder="name" onChange={onChange} />
            <label htmlFor="addstatus">Add Status</label>
            <input type="text" id="status"  name="status" placeholder="status" onChange={onChange} />
            <button onClick={onAdd}>Add</button>
            <hr />
             <table border="1" width={"100%"}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.data.length ? (
                        this.state.data.map(({id, name, status})=>{
                            return(
                                
                                <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{status}</td>
                            <td>
                                <button onClick={()=> onDelete(id)}>Delete</button> </td>
                            <td>Edit</td>
                        </tr>
                    )
                })) :(
                <tr>
                    <th colSpan={5}>
                        <h1>No data</h1>
                    </th>
                </tr>
                )

            }
                </tbody>
             </table>
            
            </>
         );
    }
}
 
export default State;
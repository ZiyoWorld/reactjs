import React, {Component} from "react";

import {student} from './moke';

class State extends Component {

    state = { 
         count: 0,
         data: student,
         name: "",
         status: "",
         search: "id",
         active: null,
         
     }
    render() { 
        const {count, name, status, data, search, active} = this.state;
        
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
            });
           
        }
        const onFilter = (e)=>{
            const {value} = e.target;
           let res = student.filter( (item)=> 
                 `${item[search]}`.toLowerCase().includes(value.toLowerCase()));
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
            status: '',
            data: [...data, user],
        });
        console.log(user);
        }
        const onSelectFilter = e =>{
            this.setState({
                search: e.target.value
            });
        }
        const onEdit = ({id,name,status}, isSave)=>{
            if(isSave){
                let res = data.map( (value) =>
                value.id === active.id ? {...value, name: this.state.name, status: this.state.status } : value)
                this.setState({
                    active: null,
                    data: res,
                })
            }else{
                this.setState({
                    name: name,
                    status: status,
                    active: {id, name, status},
                })
            }
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
            <select name=""id="" onClick={onSelectFilter}>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
            </select>
            <input type="text" id="filter" placeholder="filter" onChange={onFilter} />
            <hr />
            <h3>Add</h3>    
            <label htmlFor="addname">Add name</label>
            <input type="text" value={name} name="name" placeholder="name" onChange={onChange} />
            <label htmlFor="addstatus">Add Status</label>
            <input type="text" value={status} id="status"  name="status" placeholder="status" onChange={onChange} />
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
                            <td>{
                                active?.id === id ? ( <input type="text"
                                 name="name"
                                 onChange={onChange} 
                                 value={this.state.name} />) : (name)
                                }</td>
                            <td>{
                                active?.id === id ? ( <input 
                                    type="text" 
                                    name="status" 
                                    onChange={onChange} 
                                    value={this.state.status} />) : (status)
                                }</td>
                            <td>
                                <button onClick={()=> onDelete(id)}>Delete</button> 
                            </td>
                            <td>
                                <button onClick={()=> onEdit({id, name, status}, active?.id === id )}>
                                 {active?.id === id ? "save" : "edit"}    
                                </button> 
                            </td>
                            
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
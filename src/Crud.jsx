import React, {Component} from "react";
import {student} from './moke';
class Crud extends Component {
    
    state = { 
        data: student,
        filter: "",
        name: "",
        status: "",
        search: 'id',

     }
    render() {
        
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value,
            })
        };
        const onSelect = (e)=>{
            this.setState({
                search: e.target.value,
            });
            console.log(e.target.value)
        }

        const onDelete = id =>{
            console.log(id);
            let res = this.state.data.filter( value => value.id !== id);
            this.setState({
                data: res,
            })
        }
        const onAdd = ()=> {
            let res = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            }
            console.log(res);
            this.setState({
                data: [...this.state.data, res ],
                name: "",
                status: "",
            })
        };
        
        const onFilter = (e)=>{
            const {value} = e.target;
           let res = student.filter ( (item)=> `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()));
           this.setState({
            data: res,
           });
           console.log(res);
        };

        return ( 
        <div>
            <h1>Name: {this.state.name}</h1>
            <h1>Status: {this.state.status}</h1>
            <input type="text" name="name" value={this.state.name}
            onChange={onChange} placeholder={"name"}
            />
            <input type="text" placeholder="status" name="status" value={this.state.status}
            onChange={onChange}
            />
            <button onClick={onAdd}>Add</button> <br />
            <select name="search" id="" onChange={onSelect}>
                <option value="Id">Id</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
            </select>
            <input type="text" name="filter" placeholder="filter" onChange={onFilter} />
            
            <table  className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.length > 0 ? (
                            this.state.data.map( ({id, name, status}) => {
                                return(
                                    <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{status}</td>
                                    <td>
                                        <button onClick={()=> onDelete(id)}>Delete</button>
                                    </td>
                                    <td>
                                        Edit
                                    </td>
                                </tr>
                            )
                        })

                        ) : (
                            <tr>
                                <th colSpan={5}>No data</th>
                            </tr>
                        )
                                
                    }
                </tbody>
            </table>
              
        </div> );
    }
}
 
export default Crud;
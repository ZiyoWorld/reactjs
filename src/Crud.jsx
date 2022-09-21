import React, {Component} from 'react';
import {student } from './moke';
class Crud extends Component {
    state = { 
        name: '',
        status: '',
        data: student,
        search: 'id',
        active: null,
     }
    render() { 

        const onChange= e=>{
            console.log(e.target.value);
            this.setState({
                [e.target.name]: e.target.value,
            })
        };
        const onAdd = ()=>{
            let user = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            }
            this.setState({
                name: '',
                status: '',
                data: [...this.state.data, user],
                
            });
            console.log(user)
        };
        const onDelete = (id)=>{
            console.log(id);
            let res = this.state.data.filter( (value)=> value.id !== id);
            this.setState({
                data: res,
            });
        };

        const onSelect = (e)=>{
              this.setState({
                search: e.target.value,
              });
              console.log(e.target.value);
        }
        const onFilter = (e)=>{
            const {value} = e.target;
            const {search} = this.state;
            let res = student.filter( (item) => 
                `${item[search]}`.toLowerCase().includes(value.toLowerCase()));
            this.setState({
                data: res,
            });
            console.log(e.target.value);
        };
        const onEdit =({id, name, status}, isSave)=>{
            if(isSave){
                let res = this.state.data.map( (value)=>
                value.id === this.state.active?.id ? {...value, name: this.state.name, status: this.state.status} : value)
                this.setState({
                    active: null,
                    data: res
                })
            }else{
                this.setState({
                    name: name,
                    status: status,
                    active: {id, name, status}
                })
            }

        }
        return ( 
            <>
             <h1>Exampe</h1>
             <h1>Name: {this.state.name}</h1>
             <h1>Name: {this.state.status}</h1>
            <hr />
            <h1>Add</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' onChange={onChange} value={this.state.name} name='name' />
            <label htmlFor="status">Status:</label>
            <input type="text" id='status' onChange={onChange} value={this.state.status} name='status' />
            <button onClick={onAdd}>Add</button>
            <hr />
            <h1>Filter</h1>
            <select name="" id="" onChange={onSelect}>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
            </select>
            <input type="text" onChange={onFilter} />
            <hr />
            <table border={1}>
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
                        this.state.data.map( ({id, name, status})=> {
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{
                                        this.state.active?.id === id ? ( 
                                            <input type="text" name="name" value={this.state.name} onChange={onChange} />
                                        ) : (name)
                                        }</td>
                                    <td>{
                                        this.state.active?.id === id ? ( 
                                            <input type="text" name="status" value={this.state.status} onChange={onChange} />
                                        ) : (status)
                                        }</td>
                                    <td>
                                        <button onClick={()=>onDelete(id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={()=> onEdit({id, name, status}, this.state.active?.id === id)} >
                                            {this.state.active?.id === id ? "Save" : "Edit"}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })) : (
                            <tr>
                                <th colSpan={5}><h1>No Data</h1></th>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            </>
         );
    }
}
 
export default Crud

import React, {Component} from "react";
import {student} from './moke';
class Crud extends Component {
    
    state = { 
        data: student,
        filter: "",
        name: "",
        status: "",
        search: 'id',
        active: null,

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
            if(this.state.name.length > 0 && this.state.status.length > 0){
                this.setState({
                    data: [...this.state.data, res ],
                    name: "",
                    status: "",
                })  
            }else{
                this.setState({
                    data: this.state.data,
                })
            }
           
        };
        
        const onFilter = (e)=>{
            const {value} = e.target;
           let res = student.filter ( (item)=> `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()));
           this.setState({
            data: res,
           });
           console.log(res);
        };
        
        const onEdit = ({id, name, status}, isSave)=>{
            if(isSave){
                let res = this.state.data.map( (value)=> value.id === this.state.active.id ? {id, name: this.state.name, status: this.state.status} : value)
                this.setState({
                    data: res,
                    active: null,
                })
                
            }else{
                this.setState({
                    name: name,
                    status: status,
                    active: {id, name, status},
                });
            }
            
        }

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
                                    <td>{
                                        this.state.active?.id === id ?( 
                                        <input type="text" 
                                        value={this.state.name}
                                        onChange={onChange}
                                        name="name"
                                          /> ): ( name)
                                        }
                                        </td>
                                    <td>
                                    {
                                        this.state.active?.id === id ?( 
                                        <input type="text" 
                                        value={this.state.status} 
                                        onChange={onChange}
                                        name="status"
                                        /> ): ( status)
                                    }
                                    </td>
                                    <td>
                                        <button onClick={()=> onDelete(id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button onClick={ ()=> onEdit({id, name, status}, this.state.active?.id === id )}>
                                            {this.state.active?.id === id ? "save" : "edit"}
                                        </button>
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
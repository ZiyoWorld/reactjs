import React, {Component} from "react";
import {student} from './moke';
class Crud extends Component {
    
    state = { 
        data: student,
        filter: "",
        name: "",
        status: "",

     }
    render() {
        
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value,
            })
        }

        const onDelete = id =>{
            console.log(id);
            let res = this.state.data.filter( value => value.id !== id);
            this.setState({
                data: res,
            })
        }
        const onFilter = ()=>{
           
        }
        return ( 
        <div>
            
            <input type="text" name="filter" value={this.state.filter} onChange={onFilter} />
            
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
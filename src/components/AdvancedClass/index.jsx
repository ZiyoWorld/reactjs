import React, {Component} from "react";
import {student} from '../../data/moke';

class Advancedclass extends Component{
    state ={
        data: student,
        name: '',
        status: '',
        search: 'id',
        active: null,
    }
    render(){

        const onChange = (e)=>{
            console.log(e.target.value);
            this.setState({
                [e.target.name]: e.target.value,
            })
        };
        const onAdd = ()=>{
            let res= {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            };
            this.setState({
                data: [...this.state.data, res],
                name: '',
                status: '',
            });
        }

        const onDelete = (id)=>{

            let res = this.state.data.filter( (value)=> value.id !== id);
            this.setState({
                data: res,
            });

            console.log(id);

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

        const onEdit = ({id, name, status}, isSave)=>{
            if(isSave){
                let res = this.state.data.map( (value)=> value.id === this.state.active?.id ? {...value, name: this.state.name, status: this.state.status} : value)
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
        return(
            <div>
                <h1> Name: {this.state.name}</h1>
                <h1> Status: {this.state.status}</h1>
                <input type="text" name="name" onChange={onChange} />
                <input type="text" name="status" onChange={onChange} />
                <button onClick={onAdd}>Add</button>

                <h2>Filter</h2>
                <select onChange={onSelect}>
                    <option value="id">id</option>
                    <option value="name">name</option>
                    <option value="status">status</option>
                </select>
                <input type="text" onChange={onFilter} />

                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Status</td>
                            <td>Delete</td>
                            <td>Update</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.length ? (
                                this.state.data.map( ({id, name, status}) => {
                                    return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{
                                        this.state.active?.id === id ? ( 
                                            <input type="text" name="name" value={this.state.name} onChange={onChange} />
                                        ) : (name)}
                                        </td>
                                        <td>{
                                            this.state.active?.id === id ? (
                                                <input type="text" name="status" value={this.state.status} onChange={onChange}  />
                                            ) : (status)}
                                        </td>
                                        <td>
                                            <button onClick={()=> onDelete(id)}>Delete</button>
                                        </td>
                                        <td>
                                        <button onClick={()=> onEdit({id, name, status}, this.state.active?.id === id)} >
                                            {this.state.active?.id === id ? "Save" : "Update"}
                                        </button>
                                        </td>
                                    </tr>
                                )})) : (
                                <tr>
                                     <th colSpan={5}><h1>No Data</h1></th>
                                </tr>
                            )  
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Advancedclass;
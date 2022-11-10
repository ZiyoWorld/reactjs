import React, { Component } from 'react';

class AdvancedClass extends Component {
    
    state = { 
        data: this.props.data,
        name: '',
        status: '',
    }
    render() { 
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        const onAdd = ()=>{
            let res = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status,
            }
            this.setState({
                data: [...this.state.data, res],
            })
        };
        const onDelete = (id)=>{
            let res = this.state.data.filter( (value)=> value.id !== id);
            console.log(id);
            this.setState({
                 data: res,
             });
        }
        const onFilter =(e)=>{
            let res = this.state.data.filter ( (value)=> value.name.includes(e.target.value));
            this.setState({
                data: res,
            })
        }
        
        return ( 
            <div>
                <input type="text" name='name' onChange={onChange} />
                <input type="text" name='status' onChange={onChange} />
                <button onClick={onAdd}>Add</button>
                <input type="text" name='filter' onChange={onFilter} />

                <table border={1} style={{border: "1px"}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map( (value)=>{
                                return(
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.status}</td>
                                        <td>
                                            <button onClick={()=>onDelete(value.id)}>Delete</button>
                                        </td>
                                        <td>Update</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default AdvancedClass;
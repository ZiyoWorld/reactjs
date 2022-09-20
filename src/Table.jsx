import React, {Component} from "react";

import {student} from "./data";
class App extends Component {
    
    state = { 
        name: '',
        age: '',
        address: '',
        status: '',
        nickname: '',
        univ: '',
        job: '',
        data: student,
        active: ''
     }

    render() { 

        const onEdit = ({id, name, age, address,status, nickname, univ, job}, isSave)=>{
            if(isSave){
                const {name, age, address, status, nickname, univ, job, active, data} = this.state;
                 let res = data.map( (value)=> 
                 value.id === active?.id ? {
                    ...value, name: name, age: age, address: address, status: status, nickname: nickname, univ: univ, job: job, 
                } : value);
                this.setState({
                    active: null,
                    data: res,
                })

            }else{
                this.setState({
                    name: name,
                    status: status,
                    age: age,
                    address: address,
                    nickname: nickname,
                    univ: univ,
                    job: job,
                    active: {id, name, age, address,status, nickname, univ, job},
                })
            }

        }
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value,
            })
        };
        const onCancel = ()=>{
               this.setState({
                 active: false,
               });
        }
        return ( 

            <div id="table-wrapper">
                <div id="table-scroll">
            <table>
                <thead>
                   <tr>
                    <th id="th_id">ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>NickName</th>
                    <th>Univ</th>
                    <th>Job</th>
                    <th id="th_edit">Edit</th>
                
                </tr>
                </thead>
            <tbody>
                {
                    this.state.data.map( ({id, name,age, address,status, nickname, univ, job})=>{
                        return(
                            <tr key={id}>
                                <td id="td_id">
                                {
                                 this.state.active?.id === id ? ( <input type="text"
                                 name="id"
                                 onChange={onChange} 
                                 value={id} />) : (id)
                                }
                                    
                                </td>
                                <td>{
                                 this.state.active?.id === id ? ( <input type="text"
                                 name="name"
                                 onChange={onChange} 
                                 value={this.state.name} />) : (name)
                                }
                                </td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="age"
                                    onChange={onChange} 
                                    value={this.state.age} />) : (age)
                                }</td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="address"
                                    onChange={onChange} 
                                    value={this.state.address} />) : (address)
                                }</td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="status"
                                    onChange={onChange} 
                                    value={this.state.status} />) : (status)
                                }</td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="nickname"
                                    onChange={onChange} 
                                    value={this.state.nickname} />) : (nickname)
                                }</td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="univ"
                                    onChange={onChange} 
                                    value={this.state.univ} />) : (univ)
                                }</td>
                                <td>{
                                    this.state.active?.id === id ? ( <input type="text"
                                    name="job"
                                    onChange={onChange} 
                                    value={this.state.job} />) : (job)
                                }</td>
                                <td id="td_edit">
                                    <button className="btn-edit" onClick={()=> onEdit({id, name, age, address,status, nickname, univ, job}, this.state.active?.id === id)} >{
                                        this.state.active?.id === id ? "Save" : "Edit"
                                    }</button>
                                    <button className="btn-cancel" onClick={onCancel}>
                                        {this.state.active?.id === id ? "Cancel" : ""}
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

        </tbody>
    </table>
    </div>
  </div>

         );
    }
}
 
export default App;
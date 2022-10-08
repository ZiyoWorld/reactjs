import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            name: "Miziyod",
            lastName: "Sunatillayev",
            age: 19,
            gender: "female",
            read: "O'qigan",
        }
    }
    state = {  }
    render() { 
        const plus = ()=>{
            if(this.state.count < 10){
                this.setState({
                    count: this.state.count + 1,
                })
            }
           
        }
        const minus = ()=>{
            if(this.state.count > 0){
                this.setState({
                    count: this.state.count - 1,
                });
            }
        }
        const onChange = (e)=>{
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
        const onCheck = (e)=>{
            
             this.setState({
                [e.target.name]: e.target.checked ? "O'qigan" : "O'qimagan"
             });
             console.log(e.target.checked);
        }
       
        return ( 
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                
                <h1>Name: {this.state.name}</h1>
                <h1>LastName: {this.state.lastName} </h1>
                <h1>Age: {this.state.age} </h1>
                <input type="text" name='name' onChange={onChange} value={this.state.name} />
                <input type="text" value={this.state.lastName} name='lastName' onChange={onChange} />
                <input type="number" name='age' value={this.state.age} onChange={onChange} />

                <label htmlFor="onSelect">Select gender </label>
                <span>{this.state.gender}</span> <br />
                <select onChange={onChange} name="gender" id="onSelect">
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
                 <h1>Study: {this.state.read}</h1>
                <label htmlFor="1">Univerda:</label>
                <input name='read' type="checkbox" id='1' onChange={onCheck} />
            </div>
         );
    }
}
 
export default State;
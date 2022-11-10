import React, {Component} from 'react';


class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "Mirziyod",
            select: 0,
            check: "Sleep",
            name: "Mirziyod",
            surname: "Sunatillayev",
            age: 20,
        }
    }
    render() { 
        const onChange = (e)=>{
           this.setState({
            title: e.target.value
           })
        }
        const onSelect = (e)=>{
            this.setState({
             select: e.target.value, 
            })
        }
        const onCheck = (e)=>{
            this.setState({
                check: !e.target.checked ? "Wake up" : "Sleep"
            })
        };
        const onName = (e)=>{
            this.setState({
                [e.target.name]: e.target.value,
            });
            console.log(e.target.name)
        };
        const onSurname = (e)=>{
            this.setState({
                surname: e.target.value,
            })
        }
        return ( 
            <div>
                  <h1>State {this.state.count}</h1>   
                  <button onClick={()=>this.setState({count: this.state.count + 1})}>+</button>  
                  <button onClick={()=>this.setState({count: this.state.count - 1})}>-</button>  
                  <h1>{this.state.title}</h1>
                  <input type="text" onChange={onChange} />
                  <h2>{this.state.select}</h2>
                  <select name="" onChange={onSelect} id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">4</option>
                  </select>

                  <h2>{this.state.check}</h2>
                  <input type="checkbox" onChange={onCheck} />
                  <h1>{this.state.name}</h1>
                  <h1>{this.state.surname}</h1>
                  <h1>{this.state.age}</h1>
                  <input type="text" name="name" onChange={onName} />
                  <input type="text" onChange={(e)=> onSurname(e)} />
                  <input type="number"  name="age" onChange={onName} />
            </div>
         );
    }
}
 
export default State;
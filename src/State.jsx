import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
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
       
        return ( 
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
            </div>
         );
    }
}
 
export default State;
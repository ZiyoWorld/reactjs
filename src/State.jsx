import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "AGW",
        }
    }
    state = {  }
    render() { 
    let counts= 0;
    const plus =()=>{
        counts = counts + 1;
        console.log(counts);
        document.write(counts);
    }
    const minus =()=>{
        counts = counts - 1;
        console.log(counts);
    }

        return ( <div>
            <h1>State {this.state.count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div> );
    }
}
 
export default State;
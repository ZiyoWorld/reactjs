import React, {Component} from "react";
import {Container } from './style';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: null,
            count: 0,
        };

        this.plus = this.plus.bind(this);

        // console.log("constructor");
    }
    // componentWillMount(){ // birinchi renderdan oldin
    //     console.log("componentWillMount");
    // };
    // componentDidMount(){ // renderdan keyin yuradi.
    //     console.log(" componentDidMount");
    // };

    // componentWillReceiveProps(){ // parentdan childga prop kelgan  vaqtda 
    //     console.log(" componentWillReceiveProps");
    // };
    // shouldComponentUpdate(){ // componetni update qilish yoki kelmaslik
    //     console.log("shouldComponentUpdate");
    //     return true;
    // };

    // componentWillUpdate(){ // renderdan oldin va kelishidan keyin
    //     console.log("componentWillUpdate");
    // };

    // componentDidUpdate(){ // Dom Created
    //     console.log("componentDidUpdate");
    // };
    // componentWillUnmount(){ // after dom elemnt removed
    //     console.log("componentWillUnmount")
    // };

    plus(){
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() { 

        console.log("render");

        const plus = ()=>{
            this.setState({
                count: this.state.count + 1,
            })
        }
        return ( 
            <Container>
                <h1>React LIfe Cycle</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plus.bind(this)}>Click me!</button>
                <button onClick={() => this.plus()}>Click me!</button>
                <button onClick={this.plus}>Click me!</button>
                <button onClick={plus}>Click me!</button>
            </Container>
         );
    }
}
 
export default App;
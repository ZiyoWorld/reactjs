import React, {Component} from "react";

class Takrorlash extends Component {
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
        const {names} = this.props;
        return ( 
            <div>
                <h1>Takrorlash {names}</h1>
            {new Date().toLocaleTimeString()};


            </div>
         );
    }
}
 
export default Takrorlash;
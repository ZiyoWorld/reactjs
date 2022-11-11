import React, {Component} from "react";

class Signin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="signin">
                <h1>Sign in</h1>
                <button onClick={()=>this.props.getValue(true)} >Signup</button>
            </div>
         );
    }
}
 
export default Signin;
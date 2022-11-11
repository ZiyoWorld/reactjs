import React, {Component} from "react";

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="signin">
                <h1>Sign up</h1>
                <button onClick={()=>this.props.getValue(false)}>Signin</button>
            </div>
         );
    }
}
 
export default Signup;
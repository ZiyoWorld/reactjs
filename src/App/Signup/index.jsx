import React, { Component } from 'react';

class Signup extends Component {
    state = {  }
    render() { 
        const {getRes} = this.props;
        return ( 
            <div className='sign'>
                <h1>Sign In</h1>
                <button onClick={()=>getRes(true)}>Sign Up</button>
            </div>
         );
    }
}
 
export default Signup;
import React, { Component } from 'react';

class Signin extends Component {
    state = {  }
    render() { 
        const {getRes} = this.props;
        return ( 
            <div className='signup'>
                <h1>Sign Up</h1>
                <button onClick={()=> getRes(false)}>Sign In</button>
            </div>
         );
    }
}
 
export default Signin;
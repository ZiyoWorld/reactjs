import React, { Component } from 'react';
import Signin from './Signin';
import Signup from './Signup';

import { Container } from './style';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }
  render() { 
    return (
        <Container>
           <Signin />
           <Signup />
        </Container>
    )
  }
}

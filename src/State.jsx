import React, {Component} from "react";
import {Container, Title} from './stateStyle';
class State extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <Container>
            <Title>Styled Components</Title>
        </Container> );
    }
}
 
export default State;
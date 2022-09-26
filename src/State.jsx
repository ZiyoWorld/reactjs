import React, {Component} from "react";
import {Box, Container, Desc, Title} from './stateStyle';


class State extends Component {
    
    state = {  }
    render() { 
        return ( <Container>
            <Box bg="black" type="large">Large</Box>
            <Box bg="yellow" type="medium">Medium</Box>
            <Box bg="red"  type="small">Small</Box>
            <Title>Hey Title</Title>
            <Desc left>Description</Desc>
            <Desc>Description</Desc>
        </Container> );
    }
}
 
export default State;
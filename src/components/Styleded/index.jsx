import React, {Component} from "react";

import {Container, Card , Title, Desc, T, 
     AcctiveButton,
    // Box, 
     Button, 
     //Container,
    // Desc, 
     Rotate,} 
    // Title,} 
    from './style';


import {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.bg};
        color: ${(props)=> props.theme.cl};
    }
`;

class Styleded extends Component{
    state = { 
        light: true,
     }
    render(){
        const theme = {
            bg: this.state.light ? "white" : "black",
            cl: this.state.light ? "black" : "white",
        }
        
        return(
            <ThemeProvider theme={theme}>
            <GlobalStyle />

            <h1>Theme Priveder</h1>
            <Button>Click me!</Button>
            <AcctiveButton>Active Button</AcctiveButton>
            <Rotate>Rotate</Rotate>
        </ThemeProvider> 


            // <Container>
            //     <Card height="large" />
            //     <Card height="middle" />
            //     <Card height="small" />
            //     <Title>Hey Title</Title>
            // <Desc left>Description</Desc>
            // <Desc>Description</Desc>
            // <T>Salom</T>
            // </Container>
        )
    }
}
export default Styleded;
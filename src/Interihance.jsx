import React, { Component } from 'react';
import {
    AcctiveButton,
   // Box, 
    Button, 
    //Container,
   // Desc, 
    Rotate, 
   // Title,

} from './inStyle';

import {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.bg};
        color: ${(props)=> props.theme.cl};
    }
`
class Interihance extends Component {
   
    state = { 
        light: true,
     }
    render() { 
        const theme = {
            bg: this.state.light ? "white" : "black",
            cl: this.state.light ? "black" : "white",
        }
        return ( <ThemeProvider theme={theme}>
            <GlobalStyle />

            <h1>Theme Priveder</h1>
            <Button>Click me!</Button>
            <AcctiveButton>Active Button</AcctiveButton>
            <Rotate>Rotate</Rotate>
        </ThemeProvider> );
    }
}
 
export default Interihance;

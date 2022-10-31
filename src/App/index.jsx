import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import {Container} from './style';


function App(){
    return(
        <Container>
           <Navbar />
           <Body />
        </Container>
    )
}
export default App;
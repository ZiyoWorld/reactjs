import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

import { Container } from "./style";

function App(){

    return(
        <Container>
           <Navbar />
           <Body />
        </Container>
    )
}
export default App;
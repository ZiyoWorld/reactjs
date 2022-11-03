import React from "react";
import Controlled from "../components/Controlled";
import UnControlled from "../components/UnControlled";


import { Container } from "./style";

function App(){

    return(
        <Container>
           <Controlled />
           <UnControlled />
        </Container>
    )
}
export default App;
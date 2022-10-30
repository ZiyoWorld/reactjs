import React from "react";
import Mobile from "../Mobile";
import { BottomImg, Container } from "./style";
import bottomimg  from '../assets/Vectors.png';

function App(){

    return(
        <Container>
            <Mobile />
            <BottomImg src={bottomimg} alt={"img botom"} />
        </Container>
    )
}
export default App;
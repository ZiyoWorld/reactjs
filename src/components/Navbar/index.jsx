import React, {memo} from "react";

import {Container, Title} from './style';


function Navbar({data, dataCall}){

    
    console.log("child render");


    return(
        <Container> 
            <Title>{data.title}</Title>
            <Title>{dataCall("Home").title}</Title>
            <Title>{dataCall("About").title}</Title>
            <Title>My group</Title>
            <Title>Contact</Title>
        </Container>
    )
}
export default memo(Navbar);
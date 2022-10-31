import React, {useContext} from "react";
import { StudentContext } from "../../context";
import {Container, Title} from './style';


function Navbar(){

    const [data] = useContext(StudentContext)
    return(
        <Container>
            <Title>Students {data.length}</Title>
            <Title>Home</Title>
            <Title>About</Title>
            <Title>My group</Title>
            <Title>Contact</Title>
        </Container>
    )
}
export default Navbar;
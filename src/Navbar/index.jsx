import React, {useContext} from 'react';
import { StudentContext } from '../context';
import { Container, Header } from './style';

const Navbar = ()=>{

    const [data] = useContext(StudentContext);
    return(
        <Container>
           <Header>Students {data.length}</Header>
           <Header>Home</Header>
           <Header>About</Header>
           <Header>Classes</Header>
           <Header>Contact</Header>
        </Container>
    )
}
export default Navbar;
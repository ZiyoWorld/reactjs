import React, { Component } from 'react'
import { Container, ImgWrapper, Header, Parag, Input, Wrapper, Item} from './style';
import mobil from '../../assets/phone.png';

export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {        

        }
    }
  render() {
    return (
        <Container>
          <ImgWrapper imgUrl={mobil}>
            <Header>Sign In</Header>
            <Header>Welcome back!</Header>
            <Parag>Login to your account</Parag>
            <Input placeholder='Email' margintop />
            <Input placeholder='Password' />
            <Wrapper>
              <Item>Remember 
              </Item>
              <Item>Forgot? </Item>
            </Wrapper>
          </ImgWrapper>
        </Container>
    )
  }
}

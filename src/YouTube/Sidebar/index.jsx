import React, {Component} from 'react';
import sidebar  from '../../utils/sidebar';
import { Container, ItemWrapper, Title, Wrapper } from './style';


export default class Sidebar extends Component{
    render(){
        return(
            <Container>
              {
                sidebar.map( ({id, title, data})=>{
                   return(
                    <Wrapper key={id}>
                       {
                        title && <Title title>{title}</Title>
                       } 
                        {
                            data.map( ({icon, id, title: subTitle})=>{
                                return(
                                    <ItemWrapper key={id}>
                                        <img src={icon} alt="img" />
                                        <Title>{subTitle}          </Title>
                                    </ItemWrapper>
                                )
                            })
                        }
                    </Wrapper>
                   )
                })
              }
            </Container>
        )
    }
}
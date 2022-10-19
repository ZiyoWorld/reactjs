import React, {Component} from 'react';
import { Category, Container, Wrapper, Icons, Input, User } from './style';
import Sidebar from './Sidebar';
import Body from './Body';

import logo from '../assets/imgs/logo.png';
import user from "../assets/imgs/user.jpg";
import { data } from '../moke';

export default class YouTube extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: data,
        }
    }
    render(){
        const onFilter = (e)=>{
            let res = data.filter( (item)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            this.setState({
                data: res,
            })
        }
        const onDelete = ({id})=>{
            console.log(id);
            let ress = this.state.data.filter( value=> value.id !== id);
            this.setState({
                data: ress,
            });
        }
        return(
            <Container>
                <Wrapper>
                    <Category>
                        <Icons.Burger />
                        <Icons.Logo src={logo} alt="Logo png" />
                    </Category>
                    <Category>
                        <Input onChange={onFilter} placeholder='search' />
                        <Icons.Search />
                    </Category>
                    <Category end="true">
                          <Icons.Video />
                          <Icons.Menu />
                          <Icons.Bell />
                          <User src={user} alt="user"/>
                    </Category>
                </Wrapper>
                <Container flex>
                    <Sidebar />
                    <Body data={this.state.data} onDelete={onDelete} />
                </Container>
            </Container>
        )
    }
}
import React, {Component} from 'react';
import { Container, Video, Wrapper,Title, User, Button, Ul, Li} from './style';



export default class Card extends Component{
    render(){
        const {video, user, view, 
            time, title, id} = this.props.value;
        const {onDelete} =this.props;
        return(
            <Container>
                <Video src={video} alt="Video Img" />
                <Wrapper>
                    <User src={user.img} alt="img user"/>
                    <div>
                    <Title>{title}</Title>
                    <Title desc>{user.name} | {id} </Title>
                    <div style={{display:"flex" }}>
                        <Title>
                            {view} {time}                     
                        </Title>
                    </div>
                 </div>

                 <Button onClick={()=>onDelete({id})}>
                                <Ul>
                                    <Li></Li>
                                    <Li></Li>
                                    <Li></Li>
                                </Ul>
                  </Button>
                </Wrapper>
                
            </Container>
        )
    }
}
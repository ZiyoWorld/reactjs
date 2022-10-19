import React, {Component} from 'react';
import { Container, Video, Wrapper,Title, User} from './style';



export default class YouTube extends Component{
    render(){
        const {video, user, name, view, time} = this.props;
        return(
            <Container>
                <Video src={video} alt="Video Img" />
                <Wrapper>
                    <User src={user} alt="img user"/>
                    <div>

                    <Title>Lorem Ipsum is simply text of the printing</Title>
                    <Title desc>{name}</Title>
                    <div style={{display:"flex" }}>
                        <Title>
                            {view} {time}
                        </Title>
                    </div>
                 </div>
                </Wrapper>
            </Container>
        )
    }
}
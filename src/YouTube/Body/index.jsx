import React, {Component} from 'react';
import { Container } from './style';

import Card from "./Card";
import { data } from '../../moke';

export default class YouTube extends Component{
    render(){
        return(
            <Container>
                {
                    data.map( (value)=> (
                        <Card 
                        view="1M"
                        time= "10 min before"
                        name={"Mirziyod"}
                        user={"https://yt3.ggpht.com/BTfA6iKDuezCx6RUbi604Iw5-8VT_F2I00tQagVUpasaOcpeB3eTluy_SCfaEA8gZ26iyi1q=s900-c-k-c0x00ffffff-no-rj"} video={"https://i.ytimg.com/vi/j8j0Oo8uq-o/maxresdefault.jpg"} />

                    ))
                }
              
            </Container>
        )
    }
}
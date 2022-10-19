import React, {Component} from 'react';
import { Container } from './style';

import Card from "./Card";


export default class Body extends Component{
    render(){
        const {data, onDelete} = this.props;
        return(
            <Container>
                {
                    data.length ? (
                    data.map( (value)=> (
                        <Card key={value.id} value={value}  onDelete={onDelete} />
                    )))

                    : (<h1 style={{textAlign: "center", width: "100%" }}> Not Found</h1>)
                }
              
            </Container>
        )
    }
}
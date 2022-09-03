import React from "react";

class Fruit extends React.Component{
    render(){
        const {data} = this.props
        return(
            <div className="fruit-card">
               <img className="fruit-image" src={data.img} alt="images" />
               <h1 className="fruit-name">{data.name}</h1>
            </div>
        )
    }
}

export default Fruit;
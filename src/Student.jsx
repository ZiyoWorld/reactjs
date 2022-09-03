import React from "react";

class Student extends React.Component{
  render(){
    const {data} = this.props;
    return(
      <div>
        <h1>{data.id}.{data.name}</h1>
        {/* {this.props.children} */}
      </div>
    )
  }
}

export default Student;
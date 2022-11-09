import React, {Component} from 'react'

class Student extends Component {
  render(){
    return (
        <div>
            <h1>Name: {this.props.name}</h1>
            <h1>Age: {this.props.age}</h1>
            <h1>Where is from : {this.props.country}</h1>
            {this.props.children}
        </div>
      )
  }
    
}

export default Student;
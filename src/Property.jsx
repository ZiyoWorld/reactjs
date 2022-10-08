import React, {Component} from "react";

 export class Property extends Component {
    
    state = {  }
    render() { 
        const {name, children, data} = this.props;
        return (
            <div>
                 <h1> Hello {name}</h1>
                 {children}
                 <h3>
                    grade: {data.grade} + 
                    age: {data.age}
                    phone: {data?.phone}
                 </h3>
            </div>
          );
    }
}
 

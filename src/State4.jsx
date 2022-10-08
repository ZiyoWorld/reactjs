import React, {Component} from "react";

import {student} from './moke';

class State4 extends Component {
    
    state = { 
        data: student, 
        filter: ''

     }
    render() { 
        const onFilter = (e)=>{
            let res = student.filter( (value)=> value.name.includes(e.target.value));
              this.setState({
                filter: e.target.value,
                data: res,
              });
        };

        return ( <div>
                <input type="text" value={this.state.filter} name="filter" onChange={onFilter} />
                {
                    this.state.data.map( (value)=>{
                        return(
                            <h1 key={value.id}>{value.id} {value.name} {value.status}</h1>
                        )
                    })
                }
        </div> );
    }
}
 
export default State4;

import React, {Component} from "react";

import {data} from "./data";
class App extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div id="table-wrapper">
                <div id="table-scroll">
            <table>
                <thead>
                   <tr>
                    <th id="th_id">ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>NickName</th>
                    <th>Univ</th>
                    <th>Job</th>
                    <th id="th_edit">Edit</th>
                
                </tr>
                </thead>
            <tbody>
                {
                    data.map( (value)=>{
                        return(
                            <tr>
                                <td id="td_id">{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.address}</td>
                                <td>{value.status}</td>
                                <td>{value.nickname}</td>
                                <td>{value.univ}</td>
                                <td>{value.job}</td>
                                <td id="td_edit">{value.edit}</td>
                            </tr>
                        )
                    })
                }

        </tbody>
    </table>
    </div>
  </div>

         );
    }
}
 
export default App;
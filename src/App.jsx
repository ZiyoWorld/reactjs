import React, {Component} from "react";

import {data} from "./data";
class App extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div className="app">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Nickname</th>
                            <th>Univ</th>
                            <th>Job</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (value)=>{
                                return(
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.address}</td>
                                        <td>{value.status}</td>
                                        <td>{value.nickname}</td>
                                        <td>{value.univ}</td>
                                        <td>{value.job}</td>
                                        <td>{value.edit}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default App;
import React, {Component} from "react";

import {data} from "./data";
class App extends Component {
    
    state = {  }
    render() { 
        return ( 
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
           </table>
         );
    }
}
 
export default App;
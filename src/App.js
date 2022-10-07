import React, {Component} from "react";
import State from "./State";
// import {Property} from "./Property";

class App extends Component {
  
  state = {  
  
  }
  render() {
    return(
      <div>
          {/* <Property name="Mirziyod" data={{age: 19, grade: 22,}}>
            <h1>Hello children</h1>
          </Property>
          <Property name="Mirziyod" data={{age: 19, grade: 22, phone: "+375254585"}}>
            <h1>Hello children</h1>
          </Property> */}


          {/*===== State ==== */}
          <State />
      </div>
    ) 
  }
}
 
export default App;
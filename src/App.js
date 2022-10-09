import React, {Component} from "react";
// import Lesson6 from "./Lesson6";
//import State from "./State";
// import {Property} from "./Property";
//import State4 from "./State4";
import Crud from "./Crud";


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
          {/* <State /> */}
          {/* ======State 4 ====== */}
          {/* <State4 /> */}
          {/* ======= Crud ====== */}
          <Crud />
          {/* ==== StyledComponents ==== */}
         
         {/* <Lesson6 /> */}

      </div>
    ) 
  }
}
 
export default App;
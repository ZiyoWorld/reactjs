import React from "react";
import Class from "./Class";
import Hook from "./Hook";

class App extends React.Component{
    render(){
        return(
            <div style={{display: "flex"}}>
                <Class />
                <Hook />
            </div>
        )
    }
};
export default App;
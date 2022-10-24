import React from "react";
import Class from "./Class";
import Hook from "./Hook";

class Root extends React.Component{
    render(){
        return(
            <div style={{display: "flex"}}>
                <Class />
                <Hook />
            </div>
        )
    }
};
export default Root;
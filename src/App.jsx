import React from "react";

class App extends React.Component{
    render(){
     
        return(
            <div>
                  <h1>Hi {this.props?.title?.status || "unKnow"} {this.props?.title?.title}</h1>
                  <h4>{this.props.children}</h4>
            </div>
        )
    }
}
export default App;
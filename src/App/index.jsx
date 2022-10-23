import React, {Component} from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const list = [
    {id: 1, name: "Mirziyod"},
    {id: 2, name: "Alisher"},
    {id: 3, name: "G'afur"},
    {id: 4, name: "Abdusalom"},
    {id: 5, name: "Malika"},
    {id: 6, name: "Shaxzoda"},
    {id: 7, name: "Gulsanam"},
    {id: 8, name: "Gulsum"},
]

class App extends Component {

    state = { 
        active: true,
        list: list,
     }
    render() { 

        const getRes = (value)=>{
            this.setState({
                active: value,
                list: list,
            })
        };

        const onDelete = (id)=>{
            let res = this.state.list.filter( (value)=> value.id !== id);
            this.setState({
                list: res,
            })
        }
        return ( 
            <div className="back">
                {
                    this.state.active ? (<Signin getRes={getRes} />)
                    :
                    (<Signup getRes={getRes} />)
                    
                }
                <hr />
                {
                    this.state.list.map( (value, index)=>(
                        
                            <h1 key={value.id}>{value.id} {index + 1} {value.name} 
                            
                            <button onClick={()=> onDelete(value.id)}>Delete</button>
                            </h1>
                                            
                    ))

                }

                
            </div>
         );
    }
}
 
export default App;
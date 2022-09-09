import React, {Component} from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    //console.log('constructor');
    this.state = { 
      number: 0,
      title: "Mirziyod state and setState",
     }
  }

  
  render() { 
    const {number, title} = this.state;
    //console.log('render')

    const plus =()=>{
      if(number < 10){
        this.setState({
          number: number + 1,
        });
        console.log(number);
      }
      
    }
    const minus = ()=>{
      if(number  > 0){
        this.setState({
          number: number - 1,
        });
        console.log(number);
      }
      
    }
    const onChanges = (e)=>{
      this.setState({
        title: e.target.value,
      })
    }
    const onSelect = (e)=>{
      console.log(e.target.value)
    }
    const onCheck = (e)=>{
      console.log(e.target.checked)
    }
    return ( 
      <div>
        <h1>{title}</h1>
         <h1>State: {number}</h1>
         <input type="text" placeholder='Mirziyod' onChange={onChanges}  />
         <select onChange={onSelect}>
          <option value="female">Female</option>
          <option value="male">Male</option>
         </select>
         <input type="checkbox" onChange={onCheck}/>
         <button onClick={plus}>+</button>
         <button onClick={minus} >-</button>
      </div>
     );
  }
}
 
export default State;
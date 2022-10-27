import React, {useState, useReducer} from "react";

const Hooks = ()=>{
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mirziyod');

  const reducer = (state, action)=> {
    switch(action.type){
      case 'plus' : return state + 1;
      case 'minus' : return state - 1;
      case 'byamount' : return state + action.payload;
      default: return state; 
    }
  }

  const [counter, dispatch] = useReducer( reducer, 0);
  const [change, setChange] = useState(1);
  function onHandler(e){
    setChange(e.target.value);
  }
=======
  // useEffect
  useEffect( ()=> {
    // console.log('case 1');
  });

  useEffect( ()=>{
    console.log("case 2");
  }, []);


  useEffect( ()=>{
    console.log("case 3")
    setCount(props.count);
  }, [props.count]);

  useEffect( ()=>{
    console.log("case 4");
  }, [name, count]);
=======
  const [product, setProduct] = useState(products);
  const [quantity, setQuantity] = useState(0);


  const onPlus = ()=> {
    setQuantity(quantity + 1);
    
  }
  const onMinus = ()=>{
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  }
  return (

    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map( (value)=> {
              return(
                <tr key={value.id}>
                  <td className='products'>
                    <img src={value.img} alt="img" />
                    <div>
                      <b>{value.name}</b>
                      <p>{value.productindex}</p>
                    </div>
                  </td>
                  <td>${value.price}</td>
                  <td className='quantity'>
                    <div className='quanwrap'>
                    <span onClick={onMinus}>-</span>
                    <span className='money'>{quantity}</span>
                    <span onClick={onPlus}> + </span>
                    </div>
                  </td>
                  <td>
                    {value.total}
                  </td>
                  <td>
                   <button>Delete</button>
                  </td>
                </tr>              )
            })
          }



  return(
    <div style={{flex: 1}}>
      <h1>Hooks Component</h1>
      <h1>Count: {count}</h1>
      <h1>Counter: {counter}</h1>
      <select name="" id=""
      onChange={onHandler} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={()=>dispatch({type: "byamount", payload: Number(change),})}>{change}</button>

      <button onClick={()=>dispatch({type: "minus"})}>-</button>
      <button onClick={()=>dispatch({type: "plus"})}>+</button>
      <input type="text" value={name} 
      onChange={({target})=> setName(target.value)}
      />
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount(count + 1)}>+</button>
    </div>
  )
};

export default Hooks;
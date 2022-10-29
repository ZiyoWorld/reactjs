import React, {useState, useReducer} from "react";

const Hooks = ()=> {
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
 
  const [product, setProduct] = useState();
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
                </tr>)
            })
          }
          </tbody>
        </table>
    </div>
  )
};

export default Hooks;
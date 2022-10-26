
import React, { useState } from 'react';

import {products} from './data';
const Hooks = () => {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('webbrain');

  // const [data, setData] = useState({
  //   count: 0,
  //   name: 'Mirziyod',
  // })

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

        </tbody>
      </table>
    </div>
    // <div style={{ flex: 1 }}>
    //   <h1>Hooks Components</h1>
    //   <h1>Count: {data.count}</h1>
    //   <h1>Name: {data.name}</h1>
    //   <input
    //     type='text'
    //     value={name}
    //     onChange={({target})=> setName({...data, name: target.value})}
    //   />
    //   <button onClick={() => setCount(count - 1)}>-</button>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    // </div>
  );
};

export default Hooks;
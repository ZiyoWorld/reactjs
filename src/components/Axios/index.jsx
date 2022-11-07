import React, { useEffect } from 'react';
import axios from 'axios';
export const Axios = () => {
  
  useEffect( ()=>{
    // axios({
    //   url: 'https://jsonplaceholder.typicode.com/users',
    //   method: "POST",
    //   body: {name: "Mirziyod"},
    //   headers: {},
    //   timeout: 10000,
    // }).then( (res)=> console.log(res, "Axios"))

    axios.post('https://jsonplaceholder.typicode.com/users', {
      body: {name: "Mirziyod"},
      headers: {},
      timeoot: 10000,
    }).then( (res)=> console.log(res, "Axios"))


  }, [])

  
  return(
        <div style={{width: "50%", }}>
          <h1>Axios</h1>
        </div>
      )
};

export default Axios;
import React, {useEffect} from 'react';

export const Fetchapi = () => {

  const signal = new AbortController();
  useEffect( ()=>{
    fetch('https://houzing-app.herokuapp.com/api/v1/houses/list?page=0', {
      body: {},
      headers: {},
      method: "GET",
      signal,
    })
    .then( (res)=> res.json())
    .then((res)=> console.log(res, "FETCH"))
  }, []);

  setTimeout( ()=> signal.abort(), 10000 )
  
  
  return(
        <div>
          <h1>Fetch api</h1>

        </div>
      )
};

export default Fetchapi;
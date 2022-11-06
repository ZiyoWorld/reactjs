import React, { useState } from 'react';

export const Update = () => {
  const [uy, setUy] = useState({
    address: "New Samarqand Villa",
  });

  
  const addUy = (id) => {
    return (fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${localStorage.getItem("id")}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(uy),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
  )};
  return (
    <div>
      <hr />
      <h1>Update Form</h1>
    <span>
      Address <input type='text' />
    </span>
    <span>
      name <input type='text' />
    </span>
    <button onClick={addUy}>Update</button>
  </div>
  );
};

export default Update;
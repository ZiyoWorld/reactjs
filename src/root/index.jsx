import React, { useState, Suspense } from "react";

import useLocalStorage from '../components/getValues';

const List = React.lazy(() => import('../components/Home'));

const Root =( )=> {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useLocalStorage('');

  

  return (
    <div>
      <h1>React 18</h1>
      <input value={firstName} type="text" onChange={({target})=> setFirstName(target.value)} />
      <input value={lastName} type="text" onChange={({target})=> setLastName(target.value)} />
      {lastName}
    </div>
  );
}

export default Root;

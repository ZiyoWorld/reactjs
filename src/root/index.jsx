import React from 'react'

import Reducer from '../components/Reducer';
// import { useState } from 'react';
// import Signin from '../components/Funcbtn/Signin';
// import Signup from '../components/Funcbtn/Signup';
// import Styleded from '../components/Styleded';
// import Student from '../components/Student';
// import State from '../components/State';
// import AdvancedClass from '../components/AdvancedClass';



const Root = ()=> {

  // const [value, getValues]= useState(true);

  // const getValue =(e)=>{
  //   console.log(e);
  //   getValues(!e);
  // }
  return (
    <div>
      <div>
        {/* <h1>Props</h1>
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" >
          <h1>Uzr Go'zal from Bahrom Nazarov</h1>
        </Student>
      </div>
      <hr />

      <h1>State</h1>
      <State />

      <h1>Advanced CRUD</h1>
      <AdvancedClass /> */}
      {/* <Styleded /> */}
      {
        // value ?  <Signin getValue={getValue} /> :   <Signup getValue={getValue} />
      }
     
    {/* <Bind /> */}

    <Reducer />


      </div>
    </div>
  )
}

export default Root;
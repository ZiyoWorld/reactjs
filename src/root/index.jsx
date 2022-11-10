import React from 'react'
import Student from '../components/Student';
import State from '../components/State';
import AdvancedClass from '../components/AdvancedClass';

import {student} from '../data/moke.js';
const Root = ()=> {
  return (
    <div>
      <div>
        <h1>Props</h1>
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
      <AdvancedClass data={student} />
    </div>
  )
}

export default Root;
import React from 'react'
import Student from '../components/Student';
const Root = ()=> {
  return (
    <div>
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" />
        <Student name="Mirziyod" age="19" country="Uzbekistan" >
          <h1>Uzr Go'zal from Bahrom Nazarov</h1>
        </Student>
    </div>
  )
}

export default Root;
<<<<<<< HEAD
import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';

const Elements = () => {
   const navigate = useNavigate();

    const onSave = ()=>{
      console.log(loginRef.current.value, pswRef.current.value);
      if(
        loginRef.current.value === 'Mirziyod' && pswRef.current.value=== "1234"
      ){
        localStorage.setItem('token', true);
        navigate("/pages");
      }else{
        return localStorage.setItem("token", false)
        alert('login yoki parol xato');
      }
    
    }
    const loginRef = useRef();
    const pswRef = useRef();
  return (
    <div>
      <h1>React Router Dom5 Elements </h1>
      <input ref={loginRef} type="text" />
          <input ref={pswRef} type="text" />
          <button onClick={onSave}>Sign In</button>
    </div>
  )
}
export default Elements;
=======
import React from 'react'

const Elements = () => {
  return (
    <div>
      <h1>
      React Router Dom5 Elements  
      </h1>
      </div>
  )
}
export default Elements;
>>>>>>> a5b6eb7133a8697980b51c56d07b9ecc57500303

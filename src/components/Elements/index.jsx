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
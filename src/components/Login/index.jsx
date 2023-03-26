import React, { useRef } from "react";

const Login = () => {
  const getUsers = (id) => {
    return fetch(`http://158.51.99.245:8081/api/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res?.authenticationToken);
      });
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div>
      <span>
        email <input ref={emailRef} type="text" />
      </span>
      <span>
        passoword <input ref={passwordRef} type="text" />
      </span>
      <button onClick={getUsers}>login</button>
      <button onClick={() => localStorage.clear()}>logout</button>
    </div>
  );
};

export default Login;

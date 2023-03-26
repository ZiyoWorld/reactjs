import React, { useState, useMemo, useCallback } from "react";
import { Container } from "./style";
import Navbar from "../Navbar";

const Body = () => {
  const [counter, setCounter] = useState(0);
  console.log("Parent render");

  const data = useMemo(() => {
    return { title: "Mirziyod" };
  }, []);
  const dataCall = useCallback((param) => {
    return { title: param };
  }, []);

  return (
    <Container>
      <Navbar data={data} dataCall={dataCall} />
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </Container>
  );
};
export default Body;

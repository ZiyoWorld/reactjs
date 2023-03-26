import React from "react";
import Fetch from "../components/Fetch";
import Login from "../components/Login";
import Add from "../components/Add";
import Update from "../components/Update";

import { Container } from "./style";

function App() {
  return (
    <Container>
      <Login />
      <Fetch />
      <Add />
      <Update />
    </Container>
  );
}
export default App;

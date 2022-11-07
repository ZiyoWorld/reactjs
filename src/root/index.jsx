import axios from "axios";
import React from "react";
// import Fetch from "../components/Fetch";
// import Login from "../components/Login";
// import Add from "../components/Add";
// import Update from "../components/Update";
import Axios from '../components/Axios';
import Fetchapi from '../components/Fetchapi';
import { Container } from "./style";

function App(){

  axios.interceptors.request.use( (request)=>
  {
    console.log(request, "request");
    request.headers.Authorization = "Bearer token";
    return request
  } )
  axios.interceptors.response.use( (responce)=> {
    console.log(responce, "responce");

  })

    return(
        <Container>
          <Axios />
          <Fetchapi />
          {/* <Login />
          <Fetch />
          <Add />
          <Update /> */}
        </Container>
    )
}
export default App;
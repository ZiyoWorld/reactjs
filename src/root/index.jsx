import React from 'react';
import Navbar from '../components/Navbar';

import { Route, useNavigate, useLocation, Navigate, Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';

const Root = ()=> {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  console.log(query.get('status'));
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token, typeof token);
  return (
    <div>
      <h1>We are here {location.pathname} </h1>
        <button onClick={()=>{ 
          localStorage.removeItem('token')
          navigate("/elements");
        }}>Log out</button>
        
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map( ({path, elements, id, isPrivate})=>{
                return !isPrivate && <Route key={id} path={path} element={elements} />
                })}
            {navbar.map( ({path, elements,id, isPrivate})=>{
                return isPrivate && <Route key={id} path={path} element={token ? elements : <Navigate to={"/elements"} /> } />
            })}
            {/* <Route exact="true" path={"/"} element={<Navigate to={"/home"} />} />
            <Route exact="true" path={"/"} element={<Home />}  />
            <Route path={"/home"} element={<Home />}/>
            <Route path={"/elements"} element={<Elements />}/>
            <Route path={"/pages"} element={
             token ? <Pages /> : <Navigate to={"/elements"} />}/>
            <Route path={"/templates"} element={<Templates />} />
            <Route path={"*"} element={ <h1>404 Not Found</h1>} /> */}
          </Route>
        </Routes>
    </div>
  )
}

export default Root;
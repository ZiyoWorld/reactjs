import React from 'react';
import Home from '../components/Home';
import Pages from '../components/Pages';
import Templates from '../components/Templates';
import Elements from '../components/Elements';
//import Navbar from '../components/Navbar';
import { Route, useLocation, Navigate, Routes } from 'react-router-dom';

const Root = ()=> {
  const location = useLocation();
  console.log(location)
  const query = new URLSearchParams(location.search);
  console.log(query.get('status'));
  return (
    <div>
      <h1>
        We are here  {location.pathname}
      </h1>
      <Routes>
      <Route exact path={"/"} element={<Navigate to={"/home"} />} />

      {/* <Route path={"/home"} component={Navbar}/>
      <Route path={"/elements"} component={Navbar}/>
      <Route path={"/pages"} component={Navbar}/>
      <Route path={"/templates"} component={Navbar}/> */}
      
      <Route exact path={"/"} element={<Home />}  />
      <Route path={"/home"} element={<Home />}/>
      <Route path={"/elements"} element={<Elements />}/>
      <Route path={"/pages"} element={<Pages />}/>
      <Route path={"/templates"} element={<Templates />} />
      <Route path={"*"} element={ <h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default Root;
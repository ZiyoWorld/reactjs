import React, { useState, Profiler } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Counter from '../components/Counter';
import  {Modal}  from '../components/Modal';
// import Hover from './hover';
const Hover = React.lazy(() => import('../components/Hover'));

export const Root = () => {
  const onRender = (
    id,
    phase,
    acutalDuration,
    baseDuraion,
    startTime,
    commitTime,
    interactions
  ) => {
    console.table({
      id,
      phase,
      acutalDuration,
      baseDuraion,
      startTime,
      commitTime,
      interactions,
    });
  };
  return (
    <div>
      <h1>React 17</h1>
      <div>
        <NavLink to={'/counter'}> Counter </NavLink>
        <NavLink to={'/hover'}> Hover </NavLink>
      </div>
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route
          path='/hover'
          element={
            <React.Suspense fallback={<h1>loading...</h1>}>
              <Hover />
            </React.Suspense>
          }
        />
      </Routes>
      {/* <Profiler id='modal' onRender={onRender}>
      <h1>React 17 </h1>
      <Modal />
       </Profiler> */}
    </div>
   
  );
};

export default Root;
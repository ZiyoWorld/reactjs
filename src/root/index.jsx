import React, { useState, Profiler } from 'react';
// import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import MUI from '../components/Counter';
import AntD  from '../components/Hover';

export const Root = () => {

  return (
    <div>
      <MUI />
      <AntD />
    </div>
  );
};

export default Root;
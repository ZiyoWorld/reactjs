import React from 'react'
import Counter from '../components/Counter';
import High from '../components/High';
import Hover from '../components/Hover';

export const Root = () => {
  return (
    <div>
      <High />
      <Counter />
      <Hover />
    </div>
  )
};

export default Root;

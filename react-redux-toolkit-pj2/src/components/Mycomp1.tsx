import React from 'react';
import { useAppSelector } from '../redux/hooks';

const Mycomp1: React.FC = () =>{

    const count = useAppSelector(s => s.counter);
  return (
       <h1> Counter value is {count}</h1>
  )
};

export default Mycomp1;

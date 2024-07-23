import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {increment, decrement } from './redux/slices/counter';
import Mycomp1 from './components/Mycomp1'

function App() {
  const count = useAppSelector((state) =>state.counter)
  const dispatch =useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1> Counter value is {count}</h1>
       <button onClick={() => dispatch(increment())}>Increment</button>

       <button onClick={() => dispatch(decrement())}>Decrement</button>

      </header>
      <Mycomp1/>

    </div>
  );
}

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./Slice/CounterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
        <br />
        <br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <br />
        <div>{count}</div>
        <br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <br />
        <button onClick={() => dispatch(decrementByAmount(10))}>
          Decrement By 10
        </button>
      </div>
    </div>
  );
}

export default App;

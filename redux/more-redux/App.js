import React from "react";
import NavBar from "./components/NavBar";
// import useSelector
import { useSelector, useDispatch } from "react-redux";

// import increment from store/actions
import { increment, decrement } from "./store/actions";

function App() {

  const counter = useSelector(state => state.counter);
  const dispath = useDispatch();

  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <h1>Counter: {counter}</h1>
        <button className="btn btn-success" onClick={() => dispath(increment())} >
          Increment
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={() => dispath(decrement())} >
          Decrement
        </button>
      </div>

    </div>
  );
}

export default App;

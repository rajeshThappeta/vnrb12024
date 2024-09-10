import React, { useState } from "react";
import Test2 from "./Test2";

function Test1() {
  let [counter, setCounter] = useState(100);
  let [dataFromChild,setDataFromChild]=useState("")

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function getChildData(data){
    setDataFromChild(data)
  }

  return (
    <div className="bg-info p-5">
      <h1 className="display-2">Parent</h1>

      <p className="lead fs-1 text-danger">Counter : {counter}</p>
      <button className="btn btn-warning" onClick={handleCounterIncrement}>
        +
      </button>

      <p className="lead fs-1 text-danger">Data received from Child : {dataFromChild}</p>
      {/* nest Test2 */}
      <Test2
        counter={counter}
        handleCounterIncrement={handleCounterIncrement}
        getChildData={getChildData}
      />
    </div>
  );
}

export default Test1;

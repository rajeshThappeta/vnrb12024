import { useEffect,useState } from "react";

function EffectDemo() {

  let [counter1,setCouter1]=useState(100);
  let [counter2,setCouter2]=useState(200);

  //use effect executes only after initial rendering of a component
  //Effect  will execute everytime when state is changed if no second arg
  //effect will execute when state of array is changed
  useEffect(() => {
    //effect
    console.log("use effect executed");
  },[counter2]);


  function handleCounterChange1(){
    setCouter1(counter1+1)
  }

  function handleCounterChange2(){
    setCouter2(counter2+1)
  }

  return (
    <div className="container text-center">
      <h1 className="text-white display-1">Side effects demo</h1>
      <h2>Counter : {counter1}</h2>
      <button className="btn btn-warning me-4" onClick={handleCounterChange1}>Chnage counter state</button>
      <h2>Counter : {counter2}</h2>
      <button className="btn btn-primary" onClick={handleCounterChange2}>Chnage counter state</button>
    </div>
  );
}

export default EffectDemo;

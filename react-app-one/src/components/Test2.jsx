import { useState } from "react";

function Test2(props) {
  //{ counter : 100 ,handleCounterIncrement: F, getChildData : F}

  let [username, setUsername] = useState("masterscoding");

  function handleUsernameChange() {
    setUsername("full-stack-mastery");
  }

  return (
    <div className="bg-secondary p-5 mt-5">
      <h1 className="display-2">Child</h1>

      <p className="display-4">Data received from Parent {props.counter}</p>
      <button className="btn btn-light" onClick={props.handleCounterIncrement}>
        Change parent state
      </button>

      <p className="lead fs-1 text-warning">Username : {username}</p>
      <button className="btn btn-primary" onClick={handleUsernameChange}>
        Change Username
      </button>


      {/* button to call parent component function */}
      <button className="btn btn-dark" onClick={()=>props.getChildData(username)}>Send data to parent</button>
    </div>
  );
}

export default Test2;

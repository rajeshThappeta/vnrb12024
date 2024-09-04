import { useState } from "react";

function StateChangeDemo() {
  //state

  let [a, setA] = useState(10);
  let [username, setUsername] = useState("Rajesh");
  let [person, setPerson] = useState({ pid: 100, name: "vikas", city: "hyd" });
  let [skills,setSkills]=useState(['css','js']);

  //handler function
  function handleIncrement() {
    setA(a + 1);
  }
  function handleDecrement() {
    setA(a - 1);
  }

  function handleChnageUsername() {
    setUsername("Bhanu");
  }

  function handlePerson(){
        setPerson({...person,pid:200,name:"Kiran"}); //{pid: 100, name: "vikas", city: "hyd", pid:200}
  }

  function handleAddSkill(){
     setSkills([...skills,"Angular"])
  }
  function handleDeleteSkill(){
    let copySkills=[...skills];
    copySkills.shift();
    setSkills(copySkills)
  }

  return (
    <div className="text-center">
      <h1 className="display-3 text-warning">State change demo</h1>
      {/* value of a  */}
      <h1>Value of a is {a}</h1>
      <button className="btn btn-primary" onClick={handleIncrement}>
        +
      </button>

      <button className="btn btn-primary" onClick={handleDecrement}>
        -
      </button>
      {/* username */}
      <h1>{username}</h1>
      <button className="btn btn-secondary" onClick={handleChnageUsername}>
        Chnage Username
      </button>

      {/* person data */}
        <h1 className="mt-5">{person.pid}</h1>
        <h1>{person.name}</h1>
        <h1>{person.city}</h1>
        <button className="btn btn-warning mb-5" onClick={handlePerson}>Chnage person data</button>

        {/* skills state */}
        {
            skills.map(skill=><h1 key={skill} className="text-info">{skill}</h1>)
        }

        <button className="btn btn-success" onClick={handleAddSkill}>Add a skill</button>
        <button className="btn btn-info" onClick={handleDeleteSkill}>Delete a skill</button>
    </div>
  );
}

export default StateChangeDemo;

import './First.css'


function First() {
  //state
  let a = 10;
  let username='Ravi';
  let person={
    pid:100,
    age:20
  }
  let skills=['css','js','react','angular','css'];

  let students=[{sid:1,name:'bhanu'},{sid:2,name:'vikas'},{sid:3,name:'manasa'}]

  return (
    <div className="main">
      <h1 className='text-primary'>First component</h1>
      <h2> value of a is {a}</h2>
      <h2>Username is {username}</h2>
      <h2>PersonId is {person.pid}</h2>
      <h2>Person age is {person.age}</h2>
      {
        skills.map((skill,index)=><h2 key={index}>{skill}</h2>)
      }

      {
        students.map((stdObj)=><div key={stdObj.sid}>
            <h2>{stdObj.sid}</h2>
            <h2>{stdObj.name}</h2>
        </div>)
      }
     
    </div>
  );
}

export default First;

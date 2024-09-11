import {useState} from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'

function ManageTasks() {

   //state
   let [tasks,setTasks]=useState([]);

    
  function addNewTask(){
    let newNumber=Math.random();
    setTasks([...tasks,newNumber])
  }


  return (
    <div>

      <h1 className="display-1 text-priamry">Tasks Management system</h1>
      {/* nest addtask,taskslist and taskscount compnents */}
      <div className="d-flex justify-content-around mt-5">
      <AddTask addNewTask={addNewTask} />
      <TasksList tasks={tasks} />
      <TasksCount tasks={tasks}/>
      </div>
     

    </div>
  )
}

export default ManageTasks
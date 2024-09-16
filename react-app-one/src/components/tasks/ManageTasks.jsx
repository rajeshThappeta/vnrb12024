import {useState} from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function ManageTasks() {

     //state
  const [tasks, setTasks] = useState([]);


  return (
    <div>
      <h1 className="display-3 text-center">Task management system</h1>
      <div className="d-flex justify-content-around mt-5">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} />
        <TasksCount tasks={tasks} />
      </div>
    </div>
  );
}

export default ManageTasks;

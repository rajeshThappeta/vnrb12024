import React from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'

function ManageTasks() {
  return (
    <div>

      <h1 className="display-1 text-priamry">Tasks Management system</h1>
      {/* nest addtask,taskslist and taskscount compnents */}
      <div className="d-flex justify-content-around mt-5">
      <AddTask />
      <TasksList />
      <TasksCount />
      </div>
     

    </div>
  )
}

export default ManageTasks
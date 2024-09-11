import React from 'react'

function TasksCount(props) {  //{ tasks :[]}
  return (
    <div>
      <p className="display-6 text-warning">Tasks count</p>
      <p className="lead">{props.tasks.length}</p>
    </div>
  )
}

export default TasksCount
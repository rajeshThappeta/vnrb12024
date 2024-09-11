import React from 'react'

function TasksList(props) { //{ tasks : []}
  return (
    <div>
       <p className="display-6 text-warning">List of Tasks</p>
       {
        props.tasks.map(t=><p className='lead' key={t}>{t}</p>)
       }
    </div>
  )
}

export default TasksList
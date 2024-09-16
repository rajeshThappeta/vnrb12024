import { useState } from "react";
import { useForm } from "react-hook-form";

function AddTask(props) { //{ setTasks :F } 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function addNewTask(taskObj) {
    props.setTasks([...props.tasks, taskObj.newTask]);
    reset()
  }

  return (
    <div className="text-center">
      <h2>Add Task</h2>
      <form className="mt-5" onSubmit={handleSubmit(addNewTask)}>
        <input
          type="text"
          {...register("newTask",{required:true})}
          id=""
          className="form-control mb-4"
          placeholder="add task here..."
        />
        {/* validatiopn err msg */}
        {errors.newTask?.type==='required'&& <p className="text-danger">Plz enter a task</p>}
        <button className="btn btn-warning" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;

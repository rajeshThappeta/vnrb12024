import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [error,setError]=useState(null)

  function handleFormSubmit(newUser) {
    // console.log(newUser);
    //Make HTTP POST req to save newUser in API
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.status === 201) {
          //navigate top login component programatically
          navigate("/login");
        }
      })
      .catch((err) =>{
        setError(err)
      });
  }

  return (
    <div className="mt-4">
      <h1 className="display-3 text-center text-secondary">
        User registration
      </h1>

      {/* display error message */}
      { error!==null&&<p className="fs-1 text-warning text-center">{error.message}</p>}
      {/* from */}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="un"
            className="form-control"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="pw"
            className="form-control"
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label className="form-label" htmlFor="em">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="em"
            className="form-control"
          />
        </div>
        {/* date of birth */}
        <div className="mb-3">
          <label className="form-lable" htmlFor="db">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob")}
            id="db"
            className="form-control"
          />
        </div>
        {/* submit button */}
        <button className="btn btn-info d-block mx-auto" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { loginContextObj } from "../contexts/LoginContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 // console.log(useContext(loginContextObj));

  const { handleUserLogin, userLoginStatus, currentUser, loginErr } =
    useContext(loginContextObj);

  const navigate = useNavigate();

  //navigate to userProfile upon successful login
  useEffect(() => {
    if (userLoginStatus === true && currentUser !== null) {
      navigate(`/user-profile/${currentUser.username}`);
    }
  }, [userLoginStatus]);

  return (
    <div>
      <h1 className="display-3 text-center text-secondary">User Login</h1>

      {/*login err message */}
      {loginErr !== null && (
        <p className="text-warning text-center fs-2">{loginErr.message}</p>
      )}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleUserLogin)}
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

        {/* submit button */}
        <button className="btn btn-outline-info d-block mx-auto" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

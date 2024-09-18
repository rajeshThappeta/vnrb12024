import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate();
  const [loginErr,setLoginErr]=useState(null)

  function handleUserLogin({username,password}){
      //HTTP GET REQ
      fetch(`http://localhost:3000/users?username=${username}&password=${password}`,{method:"GET"})
      .then(res=>res.json())
      .then(usersList=>{
          if(usersList.length!==0){
            //navigate to user profile
            navigate(`/user-profile/${usersList[0].username}`,{state:usersList[0]})
          }else{
            setLoginErr({message:"Invalid username or Password"})
          }
      })
      .catch(err=> setLoginErr(err))
  }


  return (
    <div>
      <h1 className="display-3 text-center text-secondary">
        User Login
      </h1>

      {/*login err message */}
      {
        loginErr!==null && <p className='text-warning text-center fs-2'>{loginErr.message}</p>
      }
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

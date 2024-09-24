import { createContext, useState } from "react";

export const loginContextObj = createContext();

function LoginContext({ children }) {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);

  //state(userLoginStatus,currentUser)
  function handleUserLogin({ username, password }) {
    //HTTP GET REQ
    fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((usersList) => {
        if (usersList.length !== 0) {
          setUserLoginStatus(true);
          setCurrentUser(usersList[0]);
          setLoginErr(null)
        } else {
          setLoginErr({ message: "Invalid username or Password" });
        }
      })
      .catch((err) => setLoginErr(err));
  }

  function userLogout(){
      setCurrentUser(null);
      setUserLoginStatus(false);
      setLoginErr(null)
  }


  return (
    <loginContextObj.Provider
      value={{ handleUserLogin,userLogout, userLoginStatus, currentUser, loginErr ,setCurrentUser}}
    >
      {children}
    </loginContextObj.Provider>
  );
}

export default LoginContext;

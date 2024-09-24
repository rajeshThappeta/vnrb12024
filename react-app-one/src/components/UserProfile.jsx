import { useContext, useState } from "react";
import { loginContextObj } from "../contexts/LoginContext";
import { FiEdit3 } from "react-icons/fi";
import { IoSaveOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

function UserProfile() {
  const { currentUser ,setCurrentUser} = useContext(loginContextObj);
  const [userEditStatus, setUserEditStatus] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  function onUserProfileEdit() {
    setUserEditStatus(true);
    //display existing user info in the form
    setValue("username", currentUser.username);
    setValue("email", currentUser.email);
    setValue("dob", currentUser.dob);
  }

  function onModifiedUserSave(modifiedUser) {
    console.log(modifiedUser);
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(modifiedUser),
    })
      .then((res) => res.json())
      .then((editedUser) => 
        {
          setCurrentUser(editedUser)
          setUserEditStatus(false)
        })
      .catch((err) => console.log(err));
  }

  return (
    <div className="text-center">
      <h1>User profile</h1>

      {userEditStatus === false ? (
        <div className="bg-light rounded-4 p-5 text-danger fs-3 mt-5">
          <p className="lead">{currentUser.username}</p>
          <p className="lead">{currentUser.email}</p>
          <p className="lead">{currentUser.dob}</p>
          <button className="btn btn-warning" onClick={onUserProfileEdit}>
            <FiEdit3 className="me-3" /> Edit profile
          </button>
        </div>
      ) : (
        <form
          className="w-50 mx-auto mt-5"
          onSubmit={handleSubmit(onModifiedUserSave)}
        >
          <input
            type="text"
            {...register("username")}
            id=""
            className="form-control mb-3"
            disabled
          />
          <input
            type="email"
            {...register("email")}
            id=""
            className="form-control mb-3"
          />
          <input
            type="date"
            {...register("dob")}
            id=""
            className="form-control mb-3"
          />
          <button className="btn btn-success">
            <IoSaveOutline className="me-3" />
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default UserProfile;

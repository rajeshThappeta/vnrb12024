import {useLocation} from 'react-router-dom'

function UserProfile() {

  const {state}=useLocation()
  

  return (
    <div className='text-center'>
      <p className="fs-1">{state.username}</p>
      <p className="fs-3">{state.email}</p>
      <p className="fs-3">{state.dob}</p>
    </div>
  )
}

export default UserProfile
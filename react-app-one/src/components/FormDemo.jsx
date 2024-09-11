import {useForm} from 'react-hook-form';

function FormDemo() {

    const {register,handleSubmit,formState:{errors}}=useForm();

    function handleFormSubmit(obj){
        console.log(obj)
    }

    console.log("errors object is ",errors)

  return (
    <div>
        <h1 className="display-2 text-info text-center">Form demo</h1>
        {/* form */}
        <form  className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label fs-5">Username</label>
                <input type="text"  {...register('username',{required:true,minLength:4})} id="username" className="form-control" />
                {/* validation error message of username */}
                {errors.username?.type==='required' && <p className='text-warning'>*Username is required</p>}
                {errors.username?.type==='minLength' && <p className='text-warning'>*Min length should be 4</p>}
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fs-5">Email</label>
                <input type="email"   {...register('email')} id="email" className="form-control" />
            </div>
            {/* skills */}
            <div className="mb-3">
                <label>Select your skills</label>
                {/* skill-1 */}
                <div className="form-check">
                    <input type="checkbox" {...register('css')} id="css" className="form-check-input" />
                    <label htmlFor="css" className="form-check-label">CSS</label>
                </div>
                  {/* skill-2 */}
                  <div className="form-check">
                    <input type="checkbox" {...register('javascript')} id="js" className="form-check-input" />
                    <label htmlFor="js" className="form-check-label">JavaScript</label>
                </div>
                  {/* skill-3 */}
                  <div className="form-check">
                    <input type="checkbox" {...register('react')} id="react" className="form-check-input" />
                    <label htmlFor="react" className="form-check-label">ReactJS</label>
                </div>
            </div>

            {/* select state */}
            <div className="mb-3">
                <label htmlFor="state" className="form-label">Select state</label>
                <select {...register('state')} id="state" className="form-select">
                    <option value="telangana">Telangana</option>
                    <option value="andhra pradesh">Andhra pradesh</option>
                    <option value="kerala">Kerala</option>
                </select>
            </div>

            {/* feedback */}
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Feedback</label>
                    <textarea {...register('feedback')} id="feedback" className="form-control"></textarea>
                </div>
            {/* submit button */}
            <button type="submit" className="btn btn-info">SIgnup</button>
        </form>
    </div>
  )
}

export default FormDemo










//required
//minLength
//maxLength
//min
//max
//pattern

import React, { useState } from 'react'

function Task1() {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    function validateForm(){
        const newErrors = {};
        if (!username) {
            newErrors.username = 'Username is required.';
        }
        if (password.length < 8) {
            newErrors.password = 'Enter 8 characters Password';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    function handleSubmit(e){
        e.preventDefault();
        if(validateForm()){
            setUsername('');
            setPassword('');
            setErrors({});
        }
        console.log();
    }

  return (
    <div className='container col-md-4 pt-5'>
    <h2 className='text-center pb-4'>Basic Form with Validation</h2>
        <form>
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
              <input type="text" name='username' className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
              {errors.username && <span className="error " style={{color:"red"}}>{errors.username}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
              <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
              {errors.password && <span className="error" style={{color:"red"}}>{errors.password}</span>}
            </div>
            <div>
               <button className='btn btn-primary w-100' type={!!errors.username || password.length < 8} onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>

    </div>
  )
}

export default Task1

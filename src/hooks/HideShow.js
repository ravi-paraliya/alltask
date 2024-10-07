import React, { useState } from 'react';

function HideShow() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function validatePassword(pass){
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return regex.test(pass); 
    };

    function handleChange(e){
        const pass = e.target.value;
        setPassword(pass);

        if (validatePassword(pass)) {
            setError('');
        } else {
            setError("! Password is invalid...");
        }
    };

    function toggle(){
        setShow((prevShow) => !prevShow); 
    };

    return (
        <div className='container col-md-4'>
            <div className="mb-3 ">
              <label htmlFor="passwordInput" className="form-label">Password</label>
                <input 
                    type={show ? 'text' : 'password'} 
                    className="form-control" 
                    id="passwordInput" 
                    value={password} 
                    onChange={handleChange} 
                />
                <button className='btn btn-primary my-2' onClick={toggle}>
                    {show ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                </button>
                {error && <div className="text-danger">{error}</div>}
            </div> 
        </div>
    );
}

export default HideShow;

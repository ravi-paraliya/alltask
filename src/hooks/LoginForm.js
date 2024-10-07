import React, { useState } from 'react';

function LoginForm() {
  const [userData, setUserData] = useState({
    firstName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, email, password } = userData;

    if (!firstName || !email || !password) {
      setError('All fields are required');
      setMessage('');
      return;
    }

    setError('');
    setMessage('Login successful! Welcome');
    

    setUserData({ firstName: '', email: '', password: '' });
  };

  return (
    <div className='container col-md-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>

        <button className='btn btn-primary my-2' type='submit'>Submit</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginForm;

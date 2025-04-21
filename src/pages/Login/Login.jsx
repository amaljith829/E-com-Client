import { Link } from 'react-router-dom'
import React from 'react'
import './Login.css'
import axios from 'axios'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(password);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      //send login data to backend
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,

      });

      //handle success
      const { token } = response.data;//extract JWT token
      setSuccess('login successfully');
      localStorage.setItem('token', token);
    } catch (err) {
      setError(
        err.response?.data?.message || 'an error occured during login'

      );
      console.log(error);
    }


  };


  return (
    <div>
      <h1 style={{ textAlign: "center", color: "brown", fontSize: "90px" }}>
        LOGIN
      </h1>
      <div className="login-container ">
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
            required />
          <br />
          <br />
          <button type="submit">Login</button>
          <Link to={'/home'}>Go to Home</Link>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>


  )
}
export default Login
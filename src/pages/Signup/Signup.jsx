import { Link } from 'react-router-dom'
import React from 'react'
import './Signup.css'
import axios from 'axios'
import { useState } from 'react'

function Signup() {

  const [username, setUsername] = useState('');
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
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        email,
        password,

      });

      //handle success
      const { token } = response.data;//extract JWT token
      setSuccess('signup successfully');
      localStorage.setItem('token', token);
    } catch (err) {
      setError(
        err.response?.data?.message || 'an error occured during signup'

      );
      console.log(error);
    }


  };


  return (
    <div>
      <h1 style={{ textAlign: "center", color: "brown", fontSize: "90px" }}>
        Signup
      </h1>
      <div className="login-container ">
        <form onSubmit={handleLogin}>
        <input type="name" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
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
          <Link to={'/'}>Go to Home</Link>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>


  )
}
export default Signup

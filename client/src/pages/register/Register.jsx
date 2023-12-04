import { Link } from 'react-router-dom'
import './register.scss'
import { useState } from 'react'

import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  })

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs)
    } catch (error) {
      setError(error)
      console.log(error.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Nexus Web</h1>
          <p>Sign up to see photos and videos from your friends.</p>
          <hr />
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {error && error.response.data}
            <Link to="/register">
              <button onClick={handleRegister}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

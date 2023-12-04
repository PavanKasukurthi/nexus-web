import { Link } from 'react-router-dom'
import './login.scss'
import { AuthContext, useAuthContext } from '../../context/authContext'
import { useState } from 'react'

const Login = () => {
  const { login } = useAuthContext(AuthContext)

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Nexus Web.</h1>
          <p>
            Nexus Web helps you connect and share with the people in your life.
          </p>
          <hr />
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onClick={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onClick={handleChange}
            />
            <Link to="/login">
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

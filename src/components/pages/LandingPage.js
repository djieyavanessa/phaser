import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/b4.jpg'

export default function LandingPage(props) {
  const sprintOnGame = {
    color: 'white',
    fontSize: '100px',
    textAlign: 'center',
  }

  const adminUser = {
    email: 'admin@gmail.com',
    password: 'admin123',
  }
  // eslint-disable-next-line
  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  // eslint-disable-next-line
  const [error, setError] = useState('')

  // Hooks Pour préparer le modèle de données à recevoir

  const [details, setDetails] = useState({
    email: '',
    password: '',
  })

  // La fonction de soumission du formulaire

  const submitHandler = (e) => {
    e.preventDefault()
    Login(details)
  }

  const Login = (details) => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('logged In')

      setUser({
        name: details.name,
        email: details.email,
      })

      setError('')

      props.history.push('/home')
    } else {
      console.log('Details do not match ! ')
      setError('Authentication Failure ! ')
    }
  }

  return (
    <header style={HeaderStyle}>
      <h5 className="sprintongame" style={sprintOnGame}>
        SprintOn Starter{' '}
      </h5>

      <div className="text-center m-5-auto">
        <form onSubmit={submitHandler}>
          <h2>Sign in to us</h2>
          <div className="error">{error}</div>
          <p>
            <label>Username or email address</label>
            <br />
            <input
              type="text"
              name="email"
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              value={details.email}
              required
            />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
              required
            />
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Login
            </button>
          </p>
        </form>

        <footer>
          <p>
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </header>
  )
}

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

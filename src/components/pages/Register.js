import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

import BackgroundImage from '../../assets/images/b4.jpg'

function Register() {
  const sprintOnGame = {
    color: 'white',
    fontSize: '80px',
    textAlign: 'center',
  }

  return (
    <div className="Register">
      <header style={HeaderStyle}>
        <h5 className="sprintongame" style={sprintOnGame}>
          {' '}
          SprintOn Game - Join us{' '}
        </h5>

        <div className="text-center m-5-auto">
          <form action="/home">
            <p>
              <label>Username</label>
              <br />
              <input type="text" name="first_name" required />
            </p>
            <p>
              <label>Email address</label>
              <br />
              <input type="email" name="email" required />
            </p>
            <p>
              <label>Password</label>
              <br />
              <input type="password" name="password" requiredc />
            </p>
            <p>
              <input type="checkbox" name="checkbox" id="checkbox" required />{' '}
              <span>
                I agree all statements in{' '}
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  terms of service
                </a>
              </span>
              .
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Register
              </button>
            </p>
          </form>

          <div className="ti">
            {' '}
            Back to Homepage -<Link to="/">Home</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Register

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

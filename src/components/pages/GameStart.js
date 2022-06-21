import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/plattform2.jpg'

function GameStart() {
  const LinkMenu = {
    color: 'white',
    textDecoration: 'none',
  }
  return (
    <header style={HeaderStyle}>
      <div>
        <br />
        <span className="point">Point: 34250</span>
        <span className="multipli">multiplier: x2</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="start">
          {' '}
          <button className="button">
            {' '}
            <Link to="gameready" style={LinkMenu}>
              Start
            </Link>{' '}
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className="backHome">
          <Link to="/home" style={LinkMenu}>
            Return
          </Link>
        </span>
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
export default GameStart

const HeaderStyle = {
  width: '100%',
  height: '100%',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

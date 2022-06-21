import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/b10.jpg'
import { FcRating } from 'react-icons/fc'

function GameStart() {
  const LinkMenu = {
    color: 'white',
    textDecoration: 'none',
  }
  const sprintOnGame = {
    color: 'white',
    fontSize: '80px',
    textAlign: 'center',
  }
  return (
    <header style={HeaderStyle}>
      <div>
        <br />
        <span className="score">
          <table>
            <tr>
              <td>
                {' '}
                <FcRating />
                Score:{' '}
              </td>
              <td> 1500</td>
            </tr>
            <tr>
              <td>
                {' '}
                <FcRating />
                <FcRating />
                Best Score:
              </td>
              <td> 14000</td>
            </tr>
          </table>
        </span>
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
        <h1 className="sprintongame" style={sprintOnGame}>
          Game Over
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <span className="exitt">
          <Link to="/" style={LinkMenu}>
            Exit
          </Link>
        </span>
        <span className="return">
          <Link to="/gamestart" style={LinkMenu}>
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
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

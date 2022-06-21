import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import BackgroundImage from '../../assets/images/b5.jpg'

function HomePage() {
  const sprintOnGame = {
    color: 'white',
    fontSize: '80px',
    textAlign: 'center',
  }
  const LinkMenu = {
    color: 'white',
  }

  return (
    <div className="HomePage">
      <header style={HeaderStyle}>
        <h5 className="sprintongame" style={sprintOnGame}>
          SprintOn Game - Welcome User
        </h5>
        <br /> <br /> <br /> <br />
        <div className="blocMenu1">
          <Link to="/gamestart" style={LinkMenu}>
            New Game
          </Link>
        </div>
        <br />
        <div className="blocMenu1">
          <Link to="/ranking" style={LinkMenu}>
            SprintOn Game - Ranking
          </Link>
        </div>
        <br />
        <div className="blocMenu1">
          <Link to="/mystat" style={LinkMenu}>
            My Statistics
          </Link>
        </div>
        <br />
        <div className="blocMenu1">
          <Link to="/" style={LinkMenu}>
            End Game
          </Link>
        </div>
      </header>
    </div>
  )
}
export default HomePage

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

import React from 'react'
import BackgroundImage from '../../assets/images/b3.jpg'
import { Link } from 'react-router-dom'

import '../../App.css'

function Ranking() {
  const LinkMenu = {
    color: 'white',
    textDecoration: 'none',
  }

  const ListStyle = {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    margingLeft: '10%',
    margingRight: '10%',
  }
  const sprintOnGame = {
    color: 'white',
    fontSize: '80px',
    textAlign: 'center',
  }
  return (
    <header style={HeaderStyle}>
      {' '}
      <br />
      <h5 className="sprintongame" style={sprintOnGame}>
        SprintOn Game - List of World Ranking
      </h5>
      <div style={ListStyle}>
        <table class="table table-hover table-secondary">
          <thead>
            <tr>
              <th scope="col">Top</th>
              <th scope="col">Username</th>
              <th scope="col">adress mail</th>
              <th scope="col">best points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Mark@yahoo.com</td>
              <td>15000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton@gmail.com</td>
              <td>12000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Thornton@gmail.com</td>
              <td>9200</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>Mark@yahoo.com</td>
              <td>9000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton@gmail.com</td>
              <td>8300</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry the Bird</td>
              <td>Thornton@gmail.com</td>
              <td>7000</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>Mark@yahoo.com</td>
              <td>6500</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Jacob</td>
              <td>Thornton@gmail.com</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry the Bird</td>
              <td>Thornton@gmail.com</td>
              <td>4200</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>{' '}
      <br />
      <span className="backHome">
        <Link to="/home" style={LinkMenu}>
          Return
        </Link>
      </span>
      <span className="exit">
        <Link to="/" style={LinkMenu}>
          Exit
        </Link>
      </span>
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

export default Ranking

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

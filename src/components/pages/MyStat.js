import React from 'react'
import BackgroundImage from '../../assets/images/statistique.jpg'
function MyStat() {
  return (
    <header style={HeaderStyle}>
      <div className="MyStat">stat work</div>{' '}
    </header>
  )
}
export default MyStat

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

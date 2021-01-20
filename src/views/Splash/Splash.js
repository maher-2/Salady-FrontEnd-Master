import React from 'react'
import Background from '../../res/images/splash.png'
import { ReactComponent as SplashText } from '../../res/images/splash_text.svg'

function Splash () {
  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      flex: 1,
      height: '100vh',
      width: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 40, position: 'absolute', left: 35, top: 204, color: '#fff' }}>
        <SplashText />
      </div>
    </div>
  )
}

export default Splash

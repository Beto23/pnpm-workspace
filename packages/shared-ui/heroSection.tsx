import React from 'react'

export function HeroSection({children}: {children?: React.ReactNode}) {
  return (
    <div style={
      {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(60deg, #eac7c8, #ccdecb, #87b0e2, #eac7c8, #8893e2)',
        backgroundSize: '400% 400%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Hero Section</h1>
      <a style={{color: 'blue'}} href="/paqueterias">Go to Paqueterias</a>
      <br />
      {children}
    </div>
  )
}

export default HeroSection
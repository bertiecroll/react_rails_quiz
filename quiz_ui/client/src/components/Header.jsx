import React from 'react'

const Header = function({title, score}) {
  return (
    <div className="header">
      <h3>{title}</h3>
      <h3>Current Score: {score}</h3>
    </div>
  )
}

export default Header
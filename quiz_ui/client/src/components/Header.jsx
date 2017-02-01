import React from 'react'

const Header = function({title, score}) {
  return (
    <div className="header">
      <h3 className="score">Points so far: {score}</h3>
      <h3 className="header-title">{title}</h3>
    </div>
  )
}

export default Header
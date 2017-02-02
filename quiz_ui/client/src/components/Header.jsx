import React from 'react'

const Header = function({user, title, score, index}) {
  return (
    <div className="header">
      <h3 className="user-name">User: {user}</h3>
      <h3 className="score">Points so far: {score}</h3>
      <h3 className="question-count">Question: {index + 1}</h3>
      <h3 className="header-title">{title}</h3>
    </div>
  )
}

export default Header
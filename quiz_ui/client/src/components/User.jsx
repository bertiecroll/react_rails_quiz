import React from 'react'

const User = function(props) {
  return (
    <div className="user-component">
      <h1>Welcome to the Cash Flow Quiz</h1>
      <h3>What is your name?</h3>
      <input type="text" />
      <button>Next</button>
    </div>
  )
}

export default User
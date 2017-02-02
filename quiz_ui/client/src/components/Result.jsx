import React from 'react'

const Result = function(props) {

  return (
    <div className="result">
      <h3>Thank you {props.user}!</h3>
      <p>You scored {props.score} points out of a possible ?? points in our cash flow quiz</p>
      <button className="quiz-button" onClick={props.resetQuiz}>Try Again</button>
    </div>
  )
}

export default Result
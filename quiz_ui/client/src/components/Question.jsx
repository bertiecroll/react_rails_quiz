import React from 'react'
import Answer from './Answer'

const Question = function({question, submitAnswer}) {
  
  return (
    <div className="question">
      <h3>{question.title}</h3>
      <Answer
        answers={question.answers}
        submitAnswer={submitAnswer}
      />
    </div>
  )

}

export default Question
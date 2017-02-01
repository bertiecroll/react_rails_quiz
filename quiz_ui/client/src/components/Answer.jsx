import React from 'react'

const Answer = function(props) {

  const answers = props.answers.map(function(answer, index) {
    return (
      <label key={index} className="answer">
        {answer.description}
        <input type="radio" name="answer" value={index} />
      </label> 
      )
  })

  return (
    <form className="answer-form" onSubmit={props.submitAnswer}>
      {answers}
      <button type="submit">Next</button>
    </form>
  )

}

export default Answer
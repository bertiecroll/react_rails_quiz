import React from 'react'
import Question from './Question'
import Result from './Result'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user, questions, currentQuestion, updateQuestionIndex, updateScoreCard, score, complete, resetQuiz} = this.props
    const question = questions[currentQuestion]
    const content = (complete) ?
      <Result
        user={user}
        score={score}
        resetQuiz={resetQuiz}
      /> :
      <Question
        index={currentQuestion}
        question={question}
        updateScoreCard={updateScoreCard}
        updateQuestionIndex={updateQuestionIndex}
        score={score}/>
    return ( 
      <div className="quiz">
        {content}  
      </div>
    )
  }
}

export default Quiz
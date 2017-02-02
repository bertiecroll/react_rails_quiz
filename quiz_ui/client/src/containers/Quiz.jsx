import React from 'react'
import Question from '../components/Question'
import Result from '../components/Result'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.tryAgain = this.tryAgain.bind(this)
  }

  render() {
    const {user, questions, currentQuestion, updateQuestionIndex, updateScoreCard, score, complete} = this.props
    const question = questions[currentQuestion]
    const content = (complete) ?
      <Result
        user={user}
        score={score}
        tryAgain={this.tryAgain}
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

  tryAgain() {
    this.setState({
      currentQuestion: 0,
      scoreCard: [],
      complete: false
    })
  }
}

export default Quiz
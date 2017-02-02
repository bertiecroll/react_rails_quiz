import React from 'react'
import Question from '../components/Question'
import Result from '../components/Result'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      scoreCard: [],
      complete: false
    }
    this.submitAnswer = this.submitAnswer.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
  }

  render() {
    const question = this.props.questions[this.state.currentQuestion]
    const content = (this.state.complete) ?
      <Result user={this.props.user} score={this.getScore()} tryAgain={this.tryAgain}/> :
      <Question
        index={this.state.currentQuestion}
        question={question}
        submitAnswer={this.submitAnswer}
        score={this.getScore()}/>
    return ( 
      <div className="quiz">
        {content}  
      </div>
    )
  }

  submitAnswer(points) {    
    this.state.scoreCard[this.state.currentQuestion] = points
    const isComplete = this.isQuizComplete()
    if (isComplete) {
      const score = this.getScore()
      this.props.submitResult(score)
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      complete: isComplete
    })
  }

  tryAgain() {
    this.setState({
      currentQuestion: 0,
      scoreCard: [],
      complete: false
    })
  }

  isQuizComplete() {
    const atEndOfTest = this.state.scoreCard.length === this.props.questions.length
    const allAnswered = this.state.scoreCard.every(function(answer) {
      return answer !== null
    })
    return (atEndOfTest && allAnswered)
  }

  getScore() {
    return this.state.scoreCard.reduce(function(total, points) {
      return total + points
    }, 0)
  }
}

export default Quiz
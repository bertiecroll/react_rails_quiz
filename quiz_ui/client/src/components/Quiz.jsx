import React from 'react'
import Question from './Question'
import Result from './Result'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      answerPoints: [],
      complete: false
    }
    this.submitAnswer = this.submitAnswer.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
  }

  render() {
    const question = this.props.questions[this.state.currentQuestion]
    const content = (this.state.complete) ?
      <Result user={this.props.user} score={this.getScore()} tryAgain={this.tryAgain}/> :
      <Question question={question} submitAnswer={this.submitAnswer} score={this.getScore()}/>
    return ( 
      <div className="quiz">
        {content}  
      </div>
    )
  }

  submitAnswer(points) {    
    this.state.answerPoints[this.state.currentQuestion] = points
    const isComplete = this.isQuizComplete()
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      complete: isComplete
    })
  }

  tryAgain() {
    this.setState({
      currentQuestion: 0,
      answerPoints: [],
      complete: false
    })
  }

  isQuizComplete() {
    const atEndOfTest = this.state.answerPoints.length === this.props.questions.length
    const allAnswered = this.state.answerPoints.every(function(answer) {
      return answer !== null
    })
    return (atEndOfTest && allAnswered)
  }

  getScore() {
    return this.state.answerPoints.reduce(function(total, points) {
      return total + points
    }, 0)
  }
}

export default Quiz
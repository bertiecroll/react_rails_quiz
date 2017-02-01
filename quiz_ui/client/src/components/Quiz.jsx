import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      answerPoints: [],
      complete: false
    }
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  render() {
    const question = this.props.questions[this.state.currentQuestion]
    const content = (this.state.complete) ?
      "Completed!" :
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
    console.log("answers array", this.state.answerPoints)
    console.log("quiz completed?", this.state.complete)
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
import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      answers: [],
      complete: false
    }
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  render() {
    const question = this.props.questions[this.state.currentQuestion]
    const content = (this.state.complete) ?
      "Completed!" :
      <Question question={question} submitAnswer={this.submitAnswer}/>
    return ( 
      <div className="quiz">
        {content}  
      </div>
    )
  }

  submitAnswer(answerIndex) {    
    this.state.answers[this.state.currentQuestion] = answerIndex
    const isComplete = this.isQuizComplete()
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      complete: isComplete
    })
    console.log("answers array", this.state.answers)
    console.log("quiz completed?", this.state.complete)
  }

  isQuizComplete() {
    const atEndOfTest = this.state.answers.length === this.props.questions.length
    const allAnswered = this.state.answers.every(function(answer) {
      return answer !== undefined
    })
    return (atEndOfTest && allAnswered)
  }
}

export default Quiz
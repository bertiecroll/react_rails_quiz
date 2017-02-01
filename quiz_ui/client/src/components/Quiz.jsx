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
    return ( 
      <div className="quiz">
        <Question question={question} submitAnswer={this.submitAnswer}/>
      </div>
    )
  }

  submitAnswer(answerIndex) {    
    this.state.answers[this.state.currentQuestion] = answerIndex
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    })
    console.log("answers array", this.state.answers)
  }
}

export default Quiz
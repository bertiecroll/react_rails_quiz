import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0
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

  submitAnswer(event) {
    event.preventDefault()
    console.log("submit question target answer", event.target.answer.value)
  }
}

export default Quiz
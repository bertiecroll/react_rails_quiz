import React from 'react'
import Answer from './Answer'
import Header from './Header'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  render() {
    return (
      <div className="question">
        <Header title={this.props.question.title} score={this.props.score} />
        <form className="answer-form" onSubmit={this.handleSubmit}>
          {this.createAnswers()}
          <button type="submit" className="quiz-button">Next</button>
        </form>
      </div>
    )
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: parseInt(event.target.value)
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const points = parseInt(event.target.answer[this.state.selectedOption].getAttribute("points"))
    this.setState({
      selectedOption: null
    })
    this.props.submitAnswer(points)
  }

  createAnswers() {
    return this.props.question.answers.map((answer, index) => {
      return (
        <Answer
          key={index}
          index={index}
          points={answer.points}
          description={answer.description}
          onChange={this.handleOptionChange}
          checked={this.state.selectedOption === index}
        />   
      )
    })
  }
}

export default Question
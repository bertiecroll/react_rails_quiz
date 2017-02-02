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
    const {user, question, score, index} = this.props
    return (
      <div className="question">
        <Header user={user} title={question.title} score={score} index={index}/>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          {this.createAnswers()}
          <button type="submit" className="answer-button">Next</button>
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
    const index = this.state.selectedOption
    const score = parseInt(event.target.answer[index].getAttribute("points"))
    const topScore = this.getTopScore()
    this.setState({
      selectedOption: null
    })
    this.props.updateScoreCard(score, topScore)
  }

  getTopScore() {
    const scores =  this.props.question.answers.map(function(answer) {
      return answer.points
    })
    return Math.max(...scores)
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
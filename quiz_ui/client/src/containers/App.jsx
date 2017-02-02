import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as QuizActionCreators from '../actions/quiz'
import User from '../components/User'
import Quiz from './Quiz'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.addUser = this.addUser.bind(this)
    this.submitResult = this.submitResult.bind(this)
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', `${this.props.url}quizzes`)
    request.onload = () => {
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.props.dispatch(QuizActionCreators.setQuiz, data[0])
    }
    request.send(null)
  }

  render() {
    const {dispatch, quiz, currentUser, currentQuestion, scoreCard, complete} = this.props
    const updateScoreCard = bindActionCreators(QuizActionCreators.updateScoreCard, dispatch)
    const updateQuestionIndex = bindActionCreators(QuizActionCreators.updateQuestionIndex, dispatch)

    const content = (currentUser) ?
      <Quiz
        user={currentUser.name}
        questions={quiz.questions}
        currentQuestion={currentQuestion}
        updateQuestionIndex={updateQuestionIndex}
        scoreCard={scoreCard}
        updateScoreCard={updateScoreCard}
        complete={complete}
        submitResult={this.submitResult}
      /> :
      <User addUser={this.addUser}/>
    
    return (
      <div className="app-container">
        {content}
      </div>
    )
  }

  addUser(userName) {
    const request = new XMLHttpRequest()
    request.open("POST", `${this.props.url}users`)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200){
        const user = JSON.parse(request.responseText)
        this.props.dispatch(QuizActionCreators.setUser, data[0])
      }
    }
    const data = {
      user:{
        name: userName
      }
    }
    request.send(JSON.stringify(data))
  }

  submitResult(score) {
    const request = new XMLHttpRequest()
    request.open("POST", `${this.props.url}results`)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200){
        const result = JSON.parse(request.responseText)
        console.log("result submitted", result)
      }
    }
    const data = {
      result:{
        user_id: this.state.currentUser.id,
        quiz_id: this.state.quiz.id,
        score: score
      }
    }
    request.send(JSON.stringify(data))
  }

}

const mapStateToProps = function(state) {
  return {
    quiz: state.user,
    currentUser: state.currentUser,
    scoreCard: state.scoreCard,
    currentQuestion: state.currentQuestion,
    complete: state.complete
  }
}

export default connect(mapStateToProps)(App)
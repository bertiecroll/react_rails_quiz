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
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', `${this.props.url}quizzes`)
    request.onload = () => {
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.props.dispatch(QuizActionCreators.setQuiz(data[0]))
    }
    request.send(null)
  }

  componentDidUpdate() {
    if(this.props.complete) {
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
          user_id: this.props.currentUser.id,
          quiz_id: this.props.quiz.id,
          score: this.props.score
        }
      }
      request.send(JSON.stringify(data))
    }
  }

  render() {
    const {dispatch, quiz, currentUser, currentQuestion, score, complete} = this.props
    console.log("quiz", quiz)
    const updateScoreCard = bindActionCreators(QuizActionCreators.updateScoreCard, dispatch)
    const updateQuestionIndex = bindActionCreators(QuizActionCreators.updateQuestionIndex, dispatch)

    const content = (currentUser) ?
      <Quiz
        user={currentUser.name}
        questions={quiz.questions}
        currentQuestion={currentQuestion}
        updateQuestionIndex={updateQuestionIndex}
        score={score}
        updateScoreCard={updateScoreCard}
        complete={complete}
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
        this.props.dispatch(QuizActionCreators.setUser(user))
      }
    }
    const data = {
      user:{
        name: userName
      }
    }
    request.send(JSON.stringify(data))
  }

}

const mapStateToProps = function(state) {
  console.log(state)
  return {
    quiz: state.quiz,
    currentUser: state.currentUser,
    score: state.scoreCard.reduce(function(total, points) {
              return total + points
            }, 0),
    currentQuestion: state.currentQuestion,
    complete: state.complete
  }
}

export default connect(mapStateToProps)(App)
import React from 'react'
import User from '../components/User'
import Quiz from './Quiz'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: null,
      currentUser: null
    }
    this.addUser = this.addUser.bind(this)
    this.submitResult = this.submitResult.bind(this)
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', `${this.props.url}quizzes`)
    request.onload = () => {
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      console.log("quizzes", data[0])
      this.setState({
        quiz: data[0]
      })
    }
    request.send(null)
  }

  render() {
    const content = (this.state.currentUser) ?
      <Quiz
        user={this.state.currentUser.name}
        questions={this.state.quiz.questions}
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
        console.log("user added", user)
        this.setState({
          currentUser: user
        })
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

export default App
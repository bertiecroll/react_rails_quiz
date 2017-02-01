import React from 'react'
import User from '../components/User'
import Quiz from '../components/Quiz'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {},
      currentUser: null
    }
    this.addUser = this.addUser.bind(this)
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
      <Quiz user={this.state.currentUser.name} questions={this.state.quiz.questions}/> :
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

}

export default App
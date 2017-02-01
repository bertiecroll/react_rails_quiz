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
    request.open('GET', this.props.url)
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
      <Quiz user={this.state.currentUser} questions={this.state.quiz.questions}/> :
      <User addUser={this.addUser}/>
    
    return (
      <div className="app-container">
        {content}
      </div>
    )
  }

  addUser(user) {
    console.log("user added", user)
    this.setState({
      currentUser: user
    })
  }

}

export default App
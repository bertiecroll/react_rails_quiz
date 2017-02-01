import React from 'react'
import User from '../components/User'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {},
      user: {}
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
    return (
      <div className='quiz-app'>
        <User addUser={this.addUser}/>
      </div>
    )
  }

  addUser(userName) {
    console.log("user added", userName)
  }

}

export default App
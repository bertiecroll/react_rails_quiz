import React from 'react'
import User from '../components/User'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {},
      user: {}
    }
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
        <User />
      </div>
    )
  }

}

export default App
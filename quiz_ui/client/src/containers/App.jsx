import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {}
    }
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', this.props.url)
    request.onload = () => {
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      console.log("quizzes", data)
      this.setState({
        quiz: data
      })
    }
    request.send(null)
  }

  render() {
    return (
      <div className='quiz-app'>
        Cash Flow Quiz
      </div>
    )
  }

}

export default App
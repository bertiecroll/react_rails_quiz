import React from 'react'
import ErrorBox from './ErrorBox'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      displayError: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    return (
      <div className="user">
        <h1>Welcome to the Cash Flow Quiz</h1>
        <h3>What is your name?</h3>
        <input type="text" placeholder="Enter Name" onChange={this.handleInputChange}/>
        <button className="quiz-button" onClick={this.handleButtonClick}>Next</button>
        <ErrorBox
          show={this.state.displayError}
          message="Please enter name"
        />
      </div>
    )
  }

  handleButtonClick() {
    const userName = this.state.userName
    if (userName) {
     this.props.addUser(userName)
    } else {
      this.setState({
        displayError: true
      })
    }
  }

  handleInputChange(event) {
    this.setState({
      userName: event.target.value,
      displayError: false
    }) 
  }
}

export default User
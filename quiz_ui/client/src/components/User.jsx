import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    return (
      <div className="user">
        <h1>Welcome to the Cash Flow Quiz</h1>
        <h3>What is your name?</h3>
        <input type="text" onChange={this.handleInputChange}/>
        <button onClick={this.handleButtonClick}>Next</button>
      </div>
    )
  }

  handleButtonClick() {
    const userName = this.state.userName
    this.props.addUser(userName)
  }

  handleInputChange(event) {
    this.setState({
      userName: event.target.value
    }) 
  }
}

export default User
import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      <div className="quiz">
        <Question />
      </div>
    )
  }
}

export default Quiz
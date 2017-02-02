import React from 'react'

const ErrorBox = function(props) {

  return (props.show) ? 
  (<h4 className="error-message">{props.message}</h4>) :
  (<h4></h4>)
}

export default ErrorBox
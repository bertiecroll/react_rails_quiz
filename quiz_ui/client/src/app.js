import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

window.onload = function(){
  ReactDOM.render(
    <App url="http://localhost:3000/quizzes/3"/>,
    document.getElementById('app')
  )
}
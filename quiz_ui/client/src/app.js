import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import QuizReducer from './src/reducers/quiz'
import App from './containers/App'

const store = createStore(QuizReducer)

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <App url="http://localhost:3000/"/>
    </Provider>,
    document.getElementById('app')
  )
}
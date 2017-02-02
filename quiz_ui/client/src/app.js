import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import QuizReducer from './reducers/quiz'
import { loadState, saveState } from './localStorage.js'
import App from './containers/App'

const persistedState = loadState()
const store = createStore(QuizReducer, persistedState)

store.subscribe(function() {
  saveState(store.getState())
})

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <App url="http://localhost:3000/"/>
    </Provider>,
    document.getElementById('app')
  )
}
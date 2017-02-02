import * as QuizActionTypes from '../actiontypes/quiz'

const initialState = {
  quiz: null,
  currentUser: null,
  currentQuestion: 0,
  scoreCard: [],
  complete: false
}

const Quiz = function(state=initialState, action) {
  switch(action.type) {
    case QuizActionTypes.SET_QUIZ:
      return Object.assign({}, state, {
        quiz: action.quiz
      })
    case QuizActionTypes.SET_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      })
    case QuizActionTypes.UPDATE_SCORECARD:
      return Object.assign({}, state, {
        scoreCard: state.scoreCard.slice(0, action.index)
                      .concat([action.score])
                      .concat(state.scoreCard.slice(action.index + 1))
      })
    case QuizActionTypes.UPDATE_QUESTION_INDEX:
      return Object.assign({}, state, {
        currentQuestion: action.questionIndex
      })
    case QuizActionTypes.TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        complete: !state.complete
      })
    default:
      return state
  }
}

export default Quiz
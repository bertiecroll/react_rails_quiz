import * as QuizActionTypes from '../actiontypes/quiz'

const initialState = {
  quiz: null,
  currentUser: null,
  totalQuestions: 0,
  currentQuestion: 0,
  scoreCard: [],
  perfectCard: [],
  complete: false
}

const Quiz = function(state=initialState, action) {
  switch(action.type) {
    case QuizActionTypes.SET_QUIZ:
      return Object.assign({}, state, {
        quiz: action.quiz,
        totalQuestions: action.quiz.questions.length
      })
    case QuizActionTypes.SET_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      })
    case QuizActionTypes.UPDATE_SCORECARD:
      return Object.assign({}, state, {
        scoreCard: state.scoreCard.concat([action.score]),
        perfectCard: state.perfectCard.concat([action.topScore]),
        currentQuestion: state.currentQuestion + 1,
        complete: (state.currentQuestion + 1 >= state.totalQuestions)
      })
    case QuizActionTypes.UPDATE_QUESTION_INDEX:
      return Object.assign({}, state, {
        currentQuestion: action.index
      })
    case QuizActionTypes.TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        complete: !state.complete
      })
    case QuizActionTypes.RESET_QUIZ:
      return Object.assign({}, state, {
        currentQuestion: 0,
        scoreCard: [],
        perfectCard: [],
        complete: false
      })
    case QuizActionTypes.END_QUIZ:
      return Object.assign({}, state, {
        currentUser: null,
        currentQuestion: 0,
        scoreCard: [],
        perfectCard: [],
        complete: false 
      })
    default:
      return state
  }
}

export default Quiz
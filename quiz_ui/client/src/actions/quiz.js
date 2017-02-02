import * as QuizActionTypes from '../actiontypes/quiz'

export const setQuiz = function(quiz) {
  return {
    type: QuizActionTypes.SET_QUIZ,
    quiz
  }
}

export const setUser = function(user) {
  return {
    type: QuizActionTypes.SET_USER,
    user
  }
}

export const updateScoreCard = function(score, topScore) {
  return {
    type: QuizActionTypes.UPDATE_SCORECARD,
    score,
    topScore
  }
}

export const updateQuestionIndex = function(index) {
  return {
    type: QuizActionTypes.UPDATE_QUESTION_INDEX,
    index
  }
}

export const toggleComplete = function() {
  return {
    type: QuizActionTypes.TOGGLE_COMPLETE
  }
}

export const resetQuiz = function() {
  return {
    type: QuizActionTypes.RESET_QUIZ
  }
}
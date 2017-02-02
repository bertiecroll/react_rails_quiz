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

export const updateScoreCard = function(index, score) {
  return {
    type: QuizActionTypes.UPDATE_SCORECARD,
    index,
    score
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
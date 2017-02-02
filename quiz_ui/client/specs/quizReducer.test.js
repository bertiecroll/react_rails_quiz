import quizReducer from '../src/reducers/quiz'
import * as QuizActionTypes from '../src/actiontypes/quiz'

describe('QuizReducer', function() {
  it('should return initial state', function() {
    const expected = {
      quiz: null,
      currentUser: null,
      currentQuestion: 0,
      scoreCard: [],
      complete: false
    }
    expect(quizReducer(undefined, {})).toEqual(expected)
  })

  it('should handle SET_QUIZ', function() {
    const quiz = {id: 3, title: "Test Quiz", Questions: []}
    const action = {
      type: QuizActionTypes.SET_QUIZ,
      quiz: quiz
    }
    const expected = {
      quiz: quiz,
      currentUser: null,
      currentQuestion: 0,
      scoreCard: [],
      complete: false  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle SET_USER', function() {
    const user = {name: "John Smith"}
    const action = {
      type: QuizActionTypes.SET_USER,
      user: user
    }
    const expected = {
      quiz: null,
      currentUser: user,
      currentQuestion: 0,
      scoreCard: [],
      complete: false  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle UPDATE_SCORECARD', function() {
    const action = {
      type: QuizActionTypes.UPDATE_SCORECARD,
      index: 0,
      score: 15
    }
    const expected = {
      quiz: null,
      currentUser: null,
      currentQuestion: 0,
      scoreCard: [15],
      complete: false  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle UPDATE_QUESTION_INDEX', function() {
    const action = {
      type: QuizActionTypes.UPDATE_QUESTION_INDEX,
      index: 1
    }
    const expected = {
      quiz: null,
      currentUser: null,
      currentQuestion: 1,
      scoreCard: [],
      complete: false  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle TOGGLE_COMPLETE', function() {
    const action = {
      type: QuizActionTypes.TOGGLE_COMPLETE
    }
    const expected = {
      quiz: null,
      currentUser: null,
      currentQuestion: 0,
      scoreCard: [],
      complete: true  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

})


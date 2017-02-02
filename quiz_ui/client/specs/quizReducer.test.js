import quizReducer from '../src/reducers/quiz'
import * as QuizActionTypes from '../src/actiontypes/quiz'

describe('QuizReducer', function() {
  it('should return initial state', function() {
    const expected = {
      quiz: null,
      currentUser: null,
      totalQuestions: 0,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: false
    }
    expect(quizReducer(undefined, {})).toEqual(expected)
  })

  it('should handle SET_QUIZ', function() {
    const quiz = {id: 3, title: "Test Quiz", questions: []}
    const action = {
      type: QuizActionTypes.SET_QUIZ,
      quiz: quiz
    }
    const expected = {
      quiz: quiz,
      currentUser: null,
      totalQuestions: 0,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
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
      totalQuestions: 0,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: false  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle UPDATE_SCORECARD', function() {
    const action = {
      type: QuizActionTypes.UPDATE_SCORECARD,
      score: 10,
      topScore: 15
    }
    const state = {
      quiz: {id: 3, title: "Test Quiz", questions: ["a","b","c"]},
      currentUser: null,
      totalQuestions: 3,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: false
    }
    const expected = {
      quiz: {id: 3, title: "Test Quiz", questions: ["a","b","c"]},
      currentUser: null,
      totalQuestions: 3,
      currentQuestion: 1,
      scoreCard: [10],
      perfectCard: [15],
      complete: false  
    }
    expect(quizReducer(state, action)).toEqual(expected)
  })

  it('should handle UPDATE_QUESTION_INDEX', function() {
    const action = {
      type: QuizActionTypes.UPDATE_QUESTION_INDEX,
      index: 1
    }
    const expected = {
      quiz: null,
      currentUser: null,
      totalQuestions: 0,
      currentQuestion: 1,
      scoreCard: [],
      perfectCard: [],
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
      totalQuestions: 0,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: true
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle RESET_QUIZ', function() {
    const action = {
      type: QuizActionTypes.RESET_QUIZ
    }
    const state = {
      quiz: {id: 3, title: "Test Quiz", questions: ["a","b","c"]},
      currentUser: {name: "John Smith"},
      totalQuestions: 3,
      currentQuestion: 3,
      scoreCard: [10,10,10],
      perfectCard: [15,15,15],
      complete: true
    }
    const expected = {
      quiz: {id: 3, title: "Test Quiz", questions: ["a","b","c"]},
      currentUser: {name: "John Smith"},
      totalQuestions: 3,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: false 
    }
    expect(quizReducer(state, action)).toEqual(expected)
  })

  it('should handle END_QUIZ', function() {
    const action = {
      type: QuizActionTypes.END_QUIZ
    }
    const state = {
      quiz: {id: 3, title: "Test Quiz", questions: ["a","b","c"]},
      currentUser: {name: "John Smith"},
      totalQuestions: 3,
      currentQuestion: 3,
      scoreCard: [10,10,10],
      perfectCard: [15,15,15],
      complete: true
    }
    const expected = {
      quiz: null,
      currentUser: null,
      totalQuestions: 0,
      currentQuestion: 0,
      scoreCard: [],
      perfectCard: [],
      complete: false 
    }
    expect(quizReducer(state, action)).toEqual(expected)
  })

})


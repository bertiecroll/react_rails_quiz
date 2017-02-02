import * as QuizActions from '../src/actions/quiz'
import * as QuizActionTypes from '../src/actiontypes/quiz'

describe('QuizActions', function() {
  it('should create action to set quiz', function() {
    const quiz = {id: 3, title: "Test Quiz", Questions: []}
    const expectedAction = {
      type: QuizActionTypes.SET_QUIZ,
      quiz
    }
    expect(QuizActions.setQuiz(quiz)).toEqual(expectedAction)
  })

  it('should create action to set user', function() {
    const user = {name: "John Smith"}
    const expectedAction = {
      type: QuizActionTypes.SET_USER,
      user
    }
    expect(QuizActions.setUser(user)).toEqual(expectedAction)
  })

  it('should create action to update scorecard', function() {
    const score = 10
    const topScore = 15
    const expectedAction = {
      type: QuizActionTypes.UPDATE_SCORECARD,
      score,
      topScore
    }
    expect(QuizActions.updateScoreCard(10, 15)).toEqual(expectedAction)
  })

  it('should create action to update question index', function() {
    const index = 1
    const expectedAction = {
      type: QuizActionTypes.UPDATE_QUESTION_INDEX,
      index,
    }
    expect(QuizActions.updateQuestionIndex(1)).toEqual(expectedAction)
  })

  it('should create action to toggle complete', function() {
    const expectedAction = {
      type: QuizActionTypes.TOGGLE_COMPLETE
    }
    expect(QuizActions.toggleComplete()).toEqual(expectedAction)
  })

  it('should create action to reset quiz', function() {
    const expectedAction = {
      type: QuizActionTypes.RESET_QUIZ
    }
    expect(QuizActions.resetQuiz()).toEqual(expectedAction)
  })

  it('should create action to end quiz', function() {
    const expectedAction = {
      type: QuizActionTypes.END_QUIZ
    }
    expect(QuizActions.endQuiz()).toEqual(expectedAction)
  })
})
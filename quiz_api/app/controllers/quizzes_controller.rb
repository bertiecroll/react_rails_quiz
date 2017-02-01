class QuizzesController < ApplicationController

  def index
    quizzes = Quiz.all
    render json: quizzes.as_json
  end

  def show
    quiz = Quiz.find(params[:id])
    render json: quiz.as_json({
      only: [:id, :title], 
      include:
        { questions: {
          only: :title,
          include:
            { 
              answers: { only: [:description, :points] }
            } 
          }
        }

    })

  end

end
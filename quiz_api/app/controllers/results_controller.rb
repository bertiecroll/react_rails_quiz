class ResultsController < ApplicationController

  def index
    results = Result.all
    render json: results
  end

  def create
    result = Result.create(result_params)
    render json: result
  end

  private
  def result_params
    params.require(:result).permit([:user_id, :quiz_id, :score])
  end
end
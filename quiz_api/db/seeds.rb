require 'csv'

User.delete_all()
Answer.delete_all()
Question.delete_all()
Quiz.delete_all()

quiz = Quiz.create({title: "Cash Flow Quiz"})

CSV.foreach(Rails.root.join('lib', 'data', 'cash_flow_quiz.csv'), headers: true) do |row|
  question = Question.create({title: row['Question'], quiz_id: quiz.id})
  for headerIndex in 1..row.headers.length - 1
    description = row[headerIndex]
    points = row.headers[headerIndex].to_i
    Answer.create({description: description, points: points, question_id: question.id})
  end
end

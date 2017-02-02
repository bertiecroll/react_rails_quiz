# react_rails_quiz
Simple quiz using React, Redux and Rails.
Position in quiz persisted using local storage. All results persisted within rails api.

## Installing and Running App
### Requirements
* Ruby
* NPM

1. Clone repository using `git clone https://github.com/bertiecroll/react_rails_quiz.git`
2. cd into repository, then cd into `quiz_api`
3. install gem files using `bundle install`
4. migrate database using `rake db:migrate` then add seed data using `rake db:seed`
5. begin rails server using `rails s`
6. create new terminal tab, go up one directory and then cd into `quiz_ui`
7. install npm packages using `npm install`
8. begin express server using `npm start`
9. create new terminal tab and then cd into `client`
10. install npm packages using `npm install`
11. start webpack using `npm start`
12. Application will now be available at localhost:5000

### Testing
1. run rails tests using `rails test` within quiz_api directory
1. run javascript tests using `npm test` within quiz_ui directory 



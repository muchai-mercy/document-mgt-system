# Document Management System
[![Build Status](https://travis-ci.org/Mercy-Muchai/document-mgt-system.svg?branch=master)](https://travis-ci.org/Mercy-Muchai/document-mgt-system) [![Coverage Status](https://coveralls.io/repos/github/Mercy-Muchai/document-mgt-system/badge.svg?branch=develop)](https://coveralls.io/github/Mercy-Muchai/document-mgt-system?branch=develop)

## Description

- This is a simple API that creates documents per user, complete with roles and privileges.
- Users can register, perform CRUD methods for documents, set access levels for their documents, view public documents.

## Development

The server side of the application was developed with [NodeJS](https://nodejs.org/en/docs/), [Express](https://expressjs.com/en/4x/api.html) and [Sequelize](http://docs.sequelizejs.com/manual/tutorial/models-usage.html) as the ORM.
The front end was done with [React](https://facebook.github.io/react/docs/hello-world.html) and [Redux](http://redux.js.org/).

## Installation
1. Install [NodeJS](https://nodejs.org/en/docs/) and [Postgress](https://www.postgresql.org/) locally.

2. Clone the repository:
[here](https://github.com/Mercy-Muchai/document-mgt-system.git)

3. Install the dependencies:
 -          npm install
      
4. Create a .env file on the route of the application:
 -          SECRET_TOKEN_KEY = "somesecretstring"
            NODE_ENV=development
            DATABASE_URL=postgres://localhost:5432/test_db

4. Run the application:
 -          npm start

## Tests
- Run the tests:
 -          npm test

## Task Management
- The project was managed using Pivotal Tracker: [checkpoint-finale](https://www.pivotaltracker.com/n/projects/2035037)


### API Blueprint
-  This can be found on the documentation.html file on the route of this project.




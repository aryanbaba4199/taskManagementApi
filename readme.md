# Task Management API

This is a RESTful API for managing tasks.

## Installation

liveUrl : https://taskmanagementapi-crvh.onrender.com/

1. Clone the repository:
   ```sh
   git clone https://github.com/aryanbaba4199/task-management-api.git






Install dependencies:

cd task-management-api
npm install


Set up your MongoDB database and update the connection URI in app.js.
Usage
Start the server:


npm start
The server will start running on http://localhost:3000.

API Documentation
Create a new task
URL: /api/tasks
Method: POST
Request Body:
json

{
  "title": "Task title",
  "description": "Task description",
  "status": "pending"
}
Response Body (example):

{
  "_id": "6092d194930b1f1968bfae75",
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "creationDate": "2021-05-05T12:00:00.000Z",
  "__v": 0
}
Retrieve all tasks
URL: /api/tasks
Method: GET
Response Body (example):

[
  {
    "_id": "6092d194930b1f1968bfae75",
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "creationDate": "2021-05-05T12:00:00.000Z",
    "__v": 0
  }
]

# taskManagementApi

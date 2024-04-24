// tests/taskRoutesIntegration.test.js

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Task = require('../models/Task');

describe('Task Management API Integration Tests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/taskManagementTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await Task.deleteMany({});
    await mongoose.connection.close();
  });

  let taskId;

  test('POST /api/tasks - Create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Task 1',
        description: 'Description of Task 1',
        status: 'pending'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    taskId = res.body._id;
  });

  // Similar tests for other endpoints...
});

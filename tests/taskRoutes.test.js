// tests/taskRoutes.test.js

const request = require('supertest');
const app = require('../app');

describe('Task Management API', () => {
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

  test('GET /api/tasks - Retrieve all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/tasks/:id - Retrieve a single task by its ID', async () => {
    const res = await request(app).get(`/api/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', taskId);
  });

  test('PATCH /api/tasks/:id - Update a task by its ID', async () => {
    const res = await request(app)
      .patch(`/api/tasks/${taskId}`)
      .send({ title: 'Updated Task 1' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Updated Task 1');
  });

  test('DELETE /api/tasks/:id - Delete a task by its ID', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});

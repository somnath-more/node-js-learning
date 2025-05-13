const request = require('supertest');
const app = require('../app');

// Mock the DB module
jest.mock('../db');
const db = require('../db');

describe('GET /api/users', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of users', async () => {
    const mockUsers = [
      { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
    ];

    db.execute.mockResolvedValue([mockUsers, []]);

    const res = await request(app).get('/api/users');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('name', 'Alice');
    expect(db.execute).toHaveBeenCalledWith('SELECT * FROM users');
  });

  it('should return 404 if no users found', async () => {
    db.execute.mockResolvedValue([[], []]);

    const res = await request(app).get('/api/users');

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message', 'No users found');
  });

  it('should handle server errors', async () => {
    db.execute.mockRejectedValue(new Error('DB failure'));

    const res = await request(app).get('/api/users');

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('message', 'Error fetching users');
  });
});

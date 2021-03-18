const request = require('supertest');

const server = require('./server.js'); 

describe('GET /api/books', () => {
  it('returns 200 OK', () => {
    return request(server).get('/api/books')
      .expect(200)
  });
  it('returns array of books', () => {
    return request(server).get('/api/books')
      .then(res => {
        expect(res.body[0].book_id).toBe(1);
      })
  })
});

describe('POST /api/books', () => {
  it('returns created book', () => {
    return request(server).post('/api/books')
      .send({
        "book_author":"Test Author",
        "book_title":"A Test Title"
      })
      .then(res => {
        expect(res.body.book_author).toBe('Test Author');
      })
  });
  it("doesn't allow duplicate titles", () => {
    return request(server).post('/api/books')
      .send({
        "book_author":"Test Author",
        "book_title":"A Test Title"
      })
      .then(res => {
        expect(400);
      })
  })
})
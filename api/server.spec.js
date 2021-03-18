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
      .expect(400);
  })
})

describe('DELETE /api/books/:id', () => {
  it('deletes the book', () => {
    let latestBookID;
    request(server).get('/api/books')
      .then(res => {
        latestBookID = res.body[res.body.length-1].book_id;
        return request(server).delete(`/api/books/${latestBookID}`)
          .expect(204)
      })
  })
  it('handles deleting a non existent ID', () => {
    request(server).delete('/api/books/0')
      .expect(204);
  })
})
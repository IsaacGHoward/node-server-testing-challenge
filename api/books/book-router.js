const express = require('express')
const Books = require('./book-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Books.getBooks()
    .then(books => {
      res.json(books)
    })
})

router.post('/', (req,res) => {
  Books.create(req.body)
    .then(newbook => {
      res.status(201).json(newbook);
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

router.delete('/:id', (req,res) => {
  Books.remove(req.params.id)
    .then(() => {
      res.json({'message': 'Book Deleted'});
    })
})
module.exports = router;
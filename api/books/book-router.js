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
      res.json(newbook);
    })
})

module.exports = router;
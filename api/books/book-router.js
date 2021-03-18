const express = require('express')
const Books = require('./book-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Books.getBooks()
    .then(books => {
      res.json(books)
    })
})

module.exports = router;
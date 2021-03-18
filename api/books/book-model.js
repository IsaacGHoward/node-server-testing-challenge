const dbConfig = require("../../data/db-config");

function getBooks(){
  return dbConfig('books')
    .select('*')
}

function findById(book_id) {
  return dbConfig('books')
    .where('books.book_id', book_id)
    .first('*');
}


const create = async book => {
 let created_book_id;
 await dbConfig('books')
    .insert(book)
    .then(ids => {
      created_book_id = ids[0];
    });
 return findById(created_book_id);
}

function remove(book_id){
  return dbConfig('books')
    .where('books.book_id', book_id)
    .del();
}
module.exports = {
  getBooks,
  create,
  remove
}

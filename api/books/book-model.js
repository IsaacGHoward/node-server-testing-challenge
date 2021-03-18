const dbConfig = require("../../data/db-config");

function getBooks(){
  return dbConfig('books')
    .select('*')
}
function create(){

}
function remove(){

}

module.exports = {
  getBooks,
  create,
  remove
}

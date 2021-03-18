//table of books
exports.up = function(knex) {
  return knex.schema
    .createTable('books', tbl => {
      tbl.increments('book_id');
      tbl.text('book_author', 256)
        .notNullable();
      tbl.text('book_title')
        .unique()
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('books')
};

//helper function
function findId (array, id){
  return array.find((item) => item.id === id);
}

function findAuthorById(authors, id) {
  let author = {};
  for (let i = 0; i < authors.length; i++){
    author = authors[i];
    if (author.id === id){
      return author;
    }
  }
}

function findBookById(books, id) {
  return findId (books,id)
} 

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => !book.borrows[0].returned);
  const returned = books.filter((book) => book.borrows[0].returned);
 return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
const borrower = book.borrows.map((borrow) => {
  const account = accounts.find((account) => account.id === borrow.id);
  return {...account, returned: borrow.returned};
});

return borrower.slice(0,10); 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

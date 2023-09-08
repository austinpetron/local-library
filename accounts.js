function findAccountById(accounts, id) {
  const accountId = accounts.find(account => account.id === id);
  return accountId
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let borrowedAmount = 0;
  
  for (const book of books){
   const borrows = book.borrows;
   for (const borrow of borrows) {
    if (borrow.id === accountId){
      borrowedAmount++;
    }
   }
  }
 return borrowedAmount
} 


function getBooksPossessedByAccount(account, books, authors) {
const borrowedBooks = books.filter((book) => {
  const isBorrowed = book.borrows[0]
  return isBorrowed.id === account.id && !isBorrowed.returned;
});
const bookAuthors = borrowedBooks.map((book) => {
  const author = authors.find((author) => author.id === book.authorId);
  return {
    ...book,
    author,
  };
});
return bookAuthors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

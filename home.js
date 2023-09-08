function getTotalBooksCount(books) {
  bookCount = books.reduce((count, book) => count + 1, 0);
 return bookCount
}

function getTotalAccountsCount(accounts) {
  accountCount = getTotalBooksCount(accounts) //helper function from getTotalBooksCount
  return accountCount
}

function getBooksBorrowedCount(books) {
    let borrowedTotal = 0;
    for (const book of books) {
      if (!book.borrows[0].returned) {
        borrowedTotal++;
      }
    }
    return borrowedTotal;
  }

function getMostCommonGenres(books) {
  const genreCount = books.reduce((count, book) => {
    const genre = book.genre;
    if (count[genre]) {
      count[genre] += 1;
    
    } else {
      count[genre] = 1;
    }
    return count;
  }, {});

  const genreList = Object.keys(genreCount).map((name) => ({
    name,
    count: genreCount[name],
   } ));
genreList.sort((a, b) => b.count - a.count);

return genreList.slice(0,5);
}
 

function getMostPopularBooks(books) {
  const borrow = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  const popularList = borrow.sort(
    (a, b) => b.count - a.count
  );
  return popularList.slice(0,5);
}


function getMostPopularAuthors(books, authors) {
const authorBorrows = {};

for (const book of books){
  const authorId = book.authorId;
  const borrow = book.borrows.length;

  if (authorBorrows[authorId]) {
    authorBorrows[authorId] += borrow;
  
  } else {
    authorBorrows[authorId] = borrow;
  }
}
const popularAuthor = [];
for (const author of authors){
  const authorId = author.id;
  const name = `${author.name.first} ${author.name.last}`;

  const borrowAmount = authorBorrows[authorId] || 0;

  const authorObject = { name: name, count: borrowAmount};

  popularAuthor.push(authorObject);
}
popularAuthor.sort ((a,b) => b.count - a.count);

return popularAuthor.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

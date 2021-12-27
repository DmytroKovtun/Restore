const booksLoaded = (newBooks)=> {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload: newBooks
  }
}

const booksRequested = (newBooks)=> {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  }
}

const booksError = (error)=> {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
}

export const booksAddedToCart = (bookId)=> {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  }
}

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  }
}

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  }
}



const fetchBooks=(bookstoreService,dispatch )=>()=> {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err)=>dispatch(booksError(err)));
}




export {
  fetchBooks
};
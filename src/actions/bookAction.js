/** @format */

//PATH- ACTION/BOOKACTION

//ACTION - POST_BOOK , DELETE_BOOK , UPDATE_BOOK

export function postBook(book) {
  return {
    type: 'POST_BOOK',
    payload: book,
  };
}

export function deleteBook(id) {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    payload: book,
  };
}

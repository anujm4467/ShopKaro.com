/** @format */

// Reducer / bookReducer
// bookreducer 
// three action 
// POST_BOOK = USED FOR ADDING BOOK
// DELETE_BOOK = USED FOR DELETEING BOOK 
// UPDATE_BOOK = IS UDED FOR UPDATING BOOK

const bookReducer = (state = {books: []}, action) => {
  
  switch (action.type) {
  
    case 'POST_BOOK':
      return {books: [...state.books, ...action.payload]};

    case 'DELETE_BOOK':
      return {books: state.books.filter(ab => ab.id != action.payload.id)};

    case 'UPDATE_BOOK':
      return {
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            return {
              ...book,
              ...action.payload,
            };
          } else {
            return book;
          }
        }),
      };
      
    default:
      return state;
  }
};

export default bookReducer;

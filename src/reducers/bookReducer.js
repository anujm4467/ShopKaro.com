/** @format */

// Reducer / bookReducer
// bookreducer
// three action
// POST_BOOK = USED FOR ADDING BOOK
// DELETE_BOOK = USED FOR DELETEING BOOK
// UPDATE_BOOK = IS UDED FOR UPDATING BOOK

const bookReducer = (
  state = {
    books: [
      {id: 1, title: 'anuj', description: 'this is anuj', price: 'anuj'},
      {id: 2, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'},
    ],
  },
  action,
) => {
  switch (action.type) {
    case 'GET_BOOK':
      return {...state, books: [...state.books]};
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

/** @format */

// REDUCER/INDEXREDUCER
// JOIN ALL REDUCER HERE

import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  books: bookReducer,
  carts: cartReducer,
});

export default reducer;

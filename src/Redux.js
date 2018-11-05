/** @format */

import {createStore} from 'redux';

const defaultreducer = [];

const reducer = (state = defaultreducer, action) => {
  switch (action.type) {
    case 'POST_BOOK':
      let books = state.concat(action.payload);
      return books;
    case 'DECREMENT_TYPE':
      return state - action.payload;

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('State', store.getState());
});

store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {id: 1, title: 'anuj', description: 'this is anuj', price: 'anuj'},
    {id: 2, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'},
  ],
});
store.dispatch({
  type: 'POST_BOOK',
  payload: {id: 2, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'},
});
// store.dispatch({type: 'DECREMENT_TYPE', payload: 1});

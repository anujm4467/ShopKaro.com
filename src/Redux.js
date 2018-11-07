/** @format */

// Redux -root
// library
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//Reducers ------
//root reducer
import reducer from './reducers/indexReducer';

// Cart Action
import addtoCart from './actions/cartAction';

//book action
import {postBook, deleteBook, updateBook} from './actions/bookAction';

const middleware = applyMiddleware(logger);

//Store which store the root reduce
const store = createStore(reducer, middleware);

// to get every action info
store.subscribe(() => {
  console.log('State', store.getState());
});

// giving the data to reducer
store.dispatch(
  postBook([
    {id: 1, title: 'anuj', description: 'this is anuj', price: 'anuj'},
    {id: 2, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'},
  ]),
);

store.dispatch(postBook([{id: 3, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'}]));

store.dispatch(deleteBook({id: 2}));

store.dispatch(updateBook({id: 3, title: 'Anuj Mishra'}));

store.dispatch(addtoCart([{id: 1}]));

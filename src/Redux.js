/** @format */

// Redux -root
// library 
import {createStore} from 'redux';

//Reducers ------
//root reducer 
import reducer from './reducers/indexReducer';

// Cart Action 
import addtoCart from './actions/cartAction';

//Store which store the root reduce 
const store = createStore(reducer);

// to get every action info
store.subscribe(() => {
  console.log('State', store.getState());
});

// giving the data to reducer  
store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {id: 1, title: 'anuj', description: 'this is anuj', price: 'anuj'},
    {id: 2, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'},
  ],
});

store.dispatch({
  type: 'POST_BOOK',
  payload: [{id: 3, title: 'anuj Mish', description: 'this is anuj mish', price: '20$'}],
});

store.dispatch({type: 'DELETE_BOOK', payload: {id: 2}});

store.dispatch({type: 'UPDATE_BOOK', payload: {id: 3, title: 'Anuj Mishra'}});

store.dispatch(addtoCart([{id: 1}]));

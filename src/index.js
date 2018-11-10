/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import BookList from './components/pages/BookList';
import {Provider} from 'react-redux';
import reducer from './reducers/indexReducer';
import logger from 'redux-logger';

//book action
// import {postBook} from './actions/bookAction';
const middleware = applyMiddleware(logger);

//Store which store the root reduce
const store = createStore(reducer, middleware);

// giving the data to reducer
// store.dispatch(
//   postBook(),
// );

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <BookList />
      </Provider>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

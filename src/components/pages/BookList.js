/** @format */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBook} from '../../actions/bookAction';
import {Grid, Button, Row, Col} from 'react-bootstrap';
import BookItem from './BookItem';

class BookList extends Component {
  componentDidMount() {}

  render() {
    const bookList = this.props.books.map(bookArr => {
      return (
        <Col xs={12} sm={6} md={4} key={bookArr.id}>
          <BookItem id={bookArr.id} title={bookArr.title} description={bookArr.description} price={bookArr.price} />
        </Col>
      );
    });
    return (
      <Grid>
        <Row style={{marginTop: '30px'}}>{bookList}</Row>
      </Grid>
    );
  }
}

function mapStateTopProps(state) {
  console.log(state.books.books, 'this is booklist props');
  return {
    books: state.books.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(getBook, dispatch);
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps,
)(BookList);

/** @format */

import React, {Component} from 'react';
import {Well, Button, Row, Col} from 'react-bootstrap';

class BookItem extends Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>used. {this.props.price}</h6>
            <Button bsStyle="primary">Submit</Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

export default BookItem;

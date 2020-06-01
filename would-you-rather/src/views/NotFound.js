import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NotFound extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <h4>404 Page Not Found.</h4>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    )
  }
}

export default connect()(NotFound) 
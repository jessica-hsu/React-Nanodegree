import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class NotFound extends Component {
  render() {
    if (this.props.authedUser === "") {
      return <Redirect to="/"></Redirect>
    }
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

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(NotFound) 
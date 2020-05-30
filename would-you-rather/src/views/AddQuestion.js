import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import AddForm from '../components/AddForm'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddQuestion extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={2}><NavBar/></Col>
          <Col sm={10}>
            <h3>Add New Question</h3>
            <hr/>
            {
              this.props.authedUser === "" ?
              <div><h4>Please login before adding new questions.</h4></div>
              :
              <div>
                <h5>Would You Rather ... </h5>
                <AddForm/>
              </div>
            }
          </Col>
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
export default connect(mapStateToProps)(AddQuestion) 
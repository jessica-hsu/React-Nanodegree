import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from '../components/Details';

class QuestionDetails extends Component {
  render() {
    const {id, questionExists} = this.props;
    // if question exists, show it. if not, show 404 Not Found
    if (questionExists) {
      return (
        <Container fluid>
          <Row>
            <Col sm={12}><Title/></Col>
          </Row>
          <Row>
            <Col sm={2}><NavBar/></Col>
            <Col sm={10}>
              <h3>Question Details</h3>
              <hr/>
              <Details questionId={id}/>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container fluid>
          <Row>
            <Col sm={12}><Title/></Col>
          </Row>
          <Row>
            <Col sm={2}><NavBar/></Col>
            <Col sm={10}>
              <h3>Question Details</h3>
              <hr/>
              <h4>404 QUESTION NOT FOUND</h4>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

function mapStateToProps ({authedUser, users, questions }, props) {
  
  const {id} = props.match.params;
  console.log(id);
  let questionExists = false;
  if (questions[id]) {
    questionExists = true;
  }
  
  return {
    id,
    questionExists
  }
}

export default connect(mapStateToProps)(QuestionDetails) 
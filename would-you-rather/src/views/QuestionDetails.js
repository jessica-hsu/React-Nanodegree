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
    const {unanswered, answered} = this.props;
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
            <Details questionId={answered}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, users, questions }) {
    // test question id that tyler did not answer yet
    const uId = '6ni6ok3ym7mf1p33lnez';
    // answered question
    const aId = 'xj352vofupe1dqz9emx13r';
  
    return {
        userInfo: users[authedUser],
        answered: aId,
        unanswered: uId
    }
}

export default connect(mapStateToProps)(QuestionDetails) 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

class Question extends Component {
  render() {

    const {question} = this.props;
   
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Would You Rather ...</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{question.optionOne.text}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  console.log('my id', id);
  const question = questions[id];
  console.log('my q', question);
  console.log(users);
  console.log(authedUser);
  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(Question) 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render() {

    const {question} = this.props;
   
    return (
      <Link to={`/question/${question.id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Would You Rather ...</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{question.optionOne.text}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  console.log('MY ID', id);
  const question = questions[id]; console.log('QUESTION', question);
  return {
    authedUser,
    question,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Question)) 
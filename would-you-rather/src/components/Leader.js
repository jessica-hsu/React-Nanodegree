import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class Leader extends Component {
  render() {

    const {user} = this.props;
   
    return (
        <div style={{ width: '15rem' }}>
        <Image src={user.image} rounded fluid/>
        <Card>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Questions Asked: {user.numQuestionsAnswered}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Questions Answered: {user.numQuestionsAsked}</Card.Subtitle>
                <Card.Text>Final Score: {user.finalScore}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
  }
}

export default Leader
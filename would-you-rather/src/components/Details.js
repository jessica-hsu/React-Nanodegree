import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'
import MyButtons from '../components/Button'

class Details extends Component {
  render() {

    const {question, authorInfo} = this.props;
   
    return (
        <div style={{ width: '18rem' }}>
            <Card>
                <Card.Header>{authorInfo.name} asks ...</Card.Header>
                <Card.Img src={authorInfo.avatarURL}/>
                <Card.Body>
                    <Card.Title>Would You Rather ... </Card.Title>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Check type="radio" id="optionOne" name="options" label={question.optionOne.text}/>
                            <Form.Check type="radio" id="optionTwo" name="options" label={question.optionTwo.text}/>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer><MyButtons buttonType={'submit'} text={'Submit'}/></Card.Footer>
            </Card>
        </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions }, {questionId}) {
    console.log(questionId);
    const question = questions[questionId];
    console.log(question);
    const authorId = question.author;
    const authorInfo = users[authorId];
    console.log(authorInfo);
    return {
        question,
        authorInfo
    }
}

export default connect(mapStateToProps)(Details) 
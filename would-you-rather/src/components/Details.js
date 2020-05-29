import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux'
import MyButtons from '../components/Button'

class Details extends Component {
  render() {

    const {question, authorInfo} = this.props;
   
    return (
        <div style={{ width: '18rem' }}>
            <Card>
                <Form>
                <Card.Header>{authorInfo.name} asks ...</Card.Header>
                <Card.Img src={authorInfo.avatarURL}/>
                <Card.Body>
                    <Card.Title>Would You Rather ... </Card.Title>
                    {
                        question.status === "unanswered" ?
                    <div>
                        <Form.Group as={Row}>
                            <Form.Check custom type="radio" id="optionOne" name="options" label={question.optionOneText}/>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Check custom type="radio" id="optionTwo" name="options" label={question.optionTwoText}/>
                        </Form.Group>
                    </div> : 
                    <div>
                        <div style={{padding: "1rem", backgroundColor: question.votedFor === 'optionOne' ? "#99d6f2" : "transparent"}}>
                            <Card.Text>Option 1: {question.optionOneText}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">{question.optionOneTotal} out of votes {question.totalVotes}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Percent: {question.optionOnePercent}%</Card.Subtitle>
                        </div>
                        <div style={{padding: "1rem", backgroundColor: question.votedFor === 'optionTwo' ? "#99d6f2" : "transparent"}}>
                            <Card.Text>Option 2: {question.optionTwoText}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">{question.optionTwoTotal} out of votes {question.totalVotes}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Percent: {question.optionTwoPercent}%</Card.Subtitle>
                        </div>
                    </div>
                    }
                    
                </Card.Body>
                {
                  question.status === 'unanswered' ?  <Card.Footer><MyButtons buttonType={'submit'} text={'Submit'}/></Card.Footer> : ''
                }
                </Form>
            </Card>
        </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions }, questionId) {
    const id = questionId.questionId;
    const question = questions[id];
    console.log(question);
    // determine if question has been answered
    const votes1 = question.optionOne.votes;
    const votes2 = question.optionTwo.votes;
    const optionOneTotal = question.optionOne.votes.length;
    const optionTwoTotal = question.optionTwo.votes.length;
    const totalVotes = optionOneTotal + optionTwoTotal;
    let status = 'unanswered';
    let votedFor = null;
    let optionOnePercent = 0;
    let optionTwoPercent = 0;
    // determine if already answered and which answer user picked
    if (votes1.indexOf(authedUser) > -1 || votes2.indexOf(authedUser) > -1) {
        status = 'answered'
        if (votes1.indexOf(authedUser) > -1) {
            votedFor = 'optionOne';
        } else {
            votedFor = 'optionTwo';
        }

        // determine percentages of each option
        optionOnePercent = (optionOneTotal / totalVotes) * 100;
        optionTwoPercent = (optionTwoTotal / totalVotes) * 100;
    }
    
    const authorId = question.author;
    const authorInfo = users[authorId];
    console.log(authorInfo);
    const questionInfo = {
        status: status,
        author: question.author,
        optionOneText: question.optionOne.text,
        optionTwoText: question.optionTwo.text,
        votedFor: votedFor,
        optionOnePercent: optionOnePercent,
        optionTwoPercent: optionTwoPercent,
        optionOneTotal: optionOneTotal,
        optionTwoTotal: optionTwoTotal,
        totalVotes: totalVotes
    };
    console.log(questionInfo);
    return {
        question: questionInfo,
        authorInfo
    }
}

export default connect(mapStateToProps)(Details) 
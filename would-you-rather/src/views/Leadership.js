import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Leader from '../components/Leader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Leadership extends Component {
  render() {

    if (this.props.authedUser === "") {
      return <Redirect to={{pathname: '/', state: { from: '/leadership'}}} ></Redirect>
    }
    
    const {scoreBoard} = this.props;
    return (
      <Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={2}><NavBar/></Col>
          <Col sm={10}>
            <h3>Leadership Board</h3>
            <hr/>
            {
              scoreBoard.map((user) => 
                    <div key={user.id} style={{marginTop: "1rem"}}>
                        <Leader user={user}/>
                    </div>
              ) 
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
    let scoreBoard = [];
    // get necessary info for creating leadership board information
    Object.keys(users).map((userId) => {
        const user = users[userId];
        const numAnswered = Object.keys(user.answers).length;
        const numAsked = user.questions.length;
        const finalScore = numAnswered + numAsked;
        const newUserInfo = {
            id: userId,
            image: user.avatarURL,
            name: user.name,
            numQuestionsAnswered: numAnswered,
            numQuestionsAsked: numAsked,
            finalScore: finalScore
        }
        scoreBoard.push(newUserInfo);
    });
    // sorting it by final score, descending
    scoreBoard = scoreBoard.sort((u1, u2) => u2.finalScore - u1.finalScore);
    return {
      authedUser,
      scoreBoard: scoreBoard
    }
}

export default connect(mapStateToProps)(Leadership) 
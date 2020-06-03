import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import QuestionList from '../components/QuestionList'
import MyButtons from '../components/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.toggleQuestionList = this.toggleQuestionList.bind(this);
  }

  state = {
    btnType:'homepage-default'
  }

  toggleQuestionList(keyword) {
    console.log(keyword);
    this.setState({btnType: keyword});
  }

  render() {

    if (this.props.authedUser === "") {
      return <Redirect to={{pathname: '/', state: { from: '/home'}}} ></Redirect>
    }

    return (
      <Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={2}><NavBar/></Col>
          <Col sm={10}>
            <MyButtons buttonType={this.state.btnType} toggleQuestionList={this.toggleQuestionList}/>
            <QuestionList questionsIds={this.props.questionsIds} currentList={this.state.btnType}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, questions }) {
  return {
    authedUser,
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(HomePage) 
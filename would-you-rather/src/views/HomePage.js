import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import QuestionList from '../components/QuestionList'
import MyButtons from '../components/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    console.log('keyword is now: ', this.state.btnType);
  }

  render() {
    console.log('KEYWORD: ', this.state.btnType);
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

function mapStateToProps ({questions }) {
  return {
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(HomePage) 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class HomePage extends Component {
  render() {
    return (
      
<Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={2}><NavBar/></Col>
          <Col sm={10}><ul className='dashboard-list'>
          {this.props.questionsIds.map((id) => (
              <Question id={id}/>
          ))}
        </ul></Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(HomePage) 
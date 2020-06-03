import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from '../components/Details';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class QuestionDetails extends Component {
  render() {
    const {id, url} = this.props;

    if (this.props.authedUser === "") {
      return <Redirect to={{pathname: '/', state: { from: url}}} ></Redirect>
    }
    if (this.props.doesNotExist) {
      return <Redirect to="/notfound"></Redirect>
    }
    
    // if question exists, show it. if not, show 404 Not Found
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
            <Details questionId={id}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, questions }, props) {
  const {id} = props.match.params; 
  let doesntExist = true;
  if (questions[id]) {
    doesntExist = false;
  }
  return {
    id,
    authedUser,
    doesNotExist: doesntExist,
    url: props.match.url
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails))
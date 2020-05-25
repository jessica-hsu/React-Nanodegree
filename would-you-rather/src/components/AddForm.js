import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyButtons from '../components/Button'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class AddForm extends Component {

  render() {
    return (
        <Form>
            <Form.Group as={Row} controlId="optionOne">
                <Form.Label column sm="2">
                Option 1
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" placeholder="Option 1 Text"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="optionTwo">
                <Form.Label column sm="2">
                Option 2
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" placeholder="Option 2 Text"/>
                </Col>
            </Form.Group>

            <div style={{marginTop: "1rem"}}>
                <MyButtons buttonType={'submit'} text={'Submit'}/>
            </div>
        </Form>
    )
  }
}

function mapStateToProps ({questions }) {
  return {
    questionsIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(AddForm) 
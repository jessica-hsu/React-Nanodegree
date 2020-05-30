import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyButtons from '../components/Button'
import {handleAddQuestion} from '../actions/questions';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom'

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.handleOnChangeOne = this.handleOnChangeOne.bind(this);
    this.handleOnChangeTwo = this.handleOnChangeTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    optionOneValue: "",
    optionTwoValue: "",
    redirectToHome: false
  }

  handleOnChangeOne(event) {
    this.setState({optionOneValue: event.target.value});
  }

  handleOnChangeTwo(event) {
    this.setState({optionTwoValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { optionOneValue, optionTwoValue } = this.state;
    this.props.dispatch(handleAddQuestion(optionOneValue, optionTwoValue));

    this.setState({
      optionOneValue: "",
      optionTwoValue: "",
      redirectToHome: true
    });
  }

  render() {

    // go back to homepage after submitting new question
    if (this.state.redirectToHome === true) {
      return <Redirect to='/home'/>
    }

    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="optionOne">
                <Form.Label column sm="2">
                Option 1
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" value={this.state.optionOneValue} placeholder="Option 1 Text" onChange={this.handleOnChangeOne}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="optionTwo">
                <Form.Label column sm="2">
                Option 2
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" value={this.state.optionTwoValue} placeholder="Option 2 Text" onChange={this.handleOnChangeTwo}/>
                </Col>
            </Form.Group>

            <div style={{marginTop: "1rem"}}>
                <MyButtons buttonType={"submit"} text={"Submit"}/>
            </div>
        </Form>
    )
  }
}

export default connect()(AddForm) 
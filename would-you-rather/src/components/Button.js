import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class MyButtons extends Component {
  render() {

    const {buttonType, toggleQuestionList, text, handleLogin} = this.props;

    console.log(buttonType);

    if (buttonType === 'homepage-default') {
        return (
            <ButtonGroup aria-label="homepage-default">
                <Button variant="primary" onClick={toggleQuestionList.bind(this,'homepage-default')}>Answered</Button>
                <Button variant="outline-primary" onClick={toggleQuestionList.bind(this,'homepage-unanswered')}>Unanswered</Button>
            </ButtonGroup>
        )
    } else if (buttonType === 'homepage-unanswered') {
        return (
            <ButtonGroup aria-label="homepage-unanswered">
                <Button variant="outline-primary" onClick={toggleQuestionList.bind(this,'homepage-default')}>Answered</Button>
                <Button variant="primary" onClick={toggleQuestionList.bind(this,'homepage-unanswered')}>Unanswered</Button>
            </ButtonGroup>
        )
    } else  if (buttonType === 'submit') {
        return (
            <Button variant="primary" type="submit">{text}</Button>
        )
    } else {
        return (
            <Button variant="primary" onClick={handleLogin}>{text}</Button>
        )
    }
    
  }
}

function mapStateToProps ({authedUser, users, questions}, { buttonType }) {
    console.log('hello', buttonType);
    return {
      authedUser,
      questions,
      users,
    buttonType    }
  }
  
  export default connect(mapStateToProps)(MyButtons) 
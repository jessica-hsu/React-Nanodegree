import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class MyButtons extends Component {
  render() {

    const {buttonType, toggleQuestionList} = this.props;

    if (buttonType === 'homepage-default') {
        return (
            <ButtonGroup aria-label="homepage-default">
                <Button variant="primary" onClick={toggleQuestionList.bind(this,'A')}>Answered</Button>
                <Button variant="outline-primary" onClick={toggleQuestionList.bind(this,'U')}>Unanswered</Button>
            </ButtonGroup>
        )
    } else if (buttonType === 'homepage-unanswered') {
        return (
            <ButtonGroup aria-label="homepage-unanswered">
                <Button variant="outline-primary">Answered</Button>
                <Button variant="primary">Unanswered</Button>
            </ButtonGroup>
        )
    } else {
        return (
            <Button variant="primary">Submit</Button>
        )
    }
    
  }
}

export default MyButtons
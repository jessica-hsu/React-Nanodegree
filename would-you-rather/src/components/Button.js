import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Button extends Component {
  render() {

   
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Answered</Button>
            <Button variant="info">Unanswered</Button>
        </ButtonGroup>
    )
  }
}

export default Button
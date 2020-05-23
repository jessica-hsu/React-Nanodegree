import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
  render() {

    const {question} = this.props;
   
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav>Hello Tyler</Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/add">Add Question</Nav.Link>
            <Nav.Link href="/leadership">Leadership Board</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
    )
  }
}

export default NavBar
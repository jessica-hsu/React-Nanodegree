import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
  render() {

    const {question} = this.props;
   
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav>Hello Tyler</Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/add">Link</Nav.Link>
            <Nav.Link href="/leadership">Link</Nav.Link>
            <Nav.Link href="/leadership">Logout</Nav.Link>
        </Nav>
    )
  }
}

export default NavBar
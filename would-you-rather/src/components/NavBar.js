import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  render() {

    const {question} = this.props;
   
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav>Hello Tyler</Nav>
            <Link to="/home"><Nav>Home</Nav></Link>
            <Link to="/add"><Nav>Add Question</Nav></Link>
            <Link to="/leadership"><Nav>Leadership Board</Nav></Link>
            <Link to="/"><Nav>Logout</Nav></Link>
        </Nav>
    )
  }
}

export default withRouter(connect()(NavBar)) 
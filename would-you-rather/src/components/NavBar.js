import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  render() {
    const {displayName, authedUser} = this.props;
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav>Hello, {displayName}</Nav>
            <Link to="/home"><Nav>Home</Nav></Link>
            <Link to="/add"><Nav>Add Question</Nav></Link>
            <Link to="/leadership"><Nav>Leadership Board</Nav></Link>
            {
              authedUser ? 
              <Link to="/"><Nav>Logout</Nav></Link> : ''
            }
        </Nav>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  console.log('NAVBAR', authedUser);
  let displayName = "Stranger";
  if (authedUser) {
    displayName = users[authedUser].name;
  }
  console.log('NAVBAR', users);
  return {
    displayName,
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(NavBar)) 
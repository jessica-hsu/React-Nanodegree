import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import { Link, withRouter } from 'react-router-dom'
import {setAuthedUser} from '../actions/authUser';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(setAuthedUser(""));
  }

  render() {
    const {displayName} = this.props;
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
          { displayName ?
          <div>
            <Nav>Hello, {displayName}</Nav>
            <Link to="/home"><Nav>Home</Nav></Link>
            <Link to="/add"><Nav>Add Question</Nav></Link>
            <Link to="/leadership"><Nav>Leadership Board</Nav></Link>
            <Link to="/" onClick={this.handleClick}><Nav>Logout</Nav></Link>
          </div>
          :
          <div>
            <Link to="/"><Nav>Login</Nav></Link>
          </div>
          }
        </Nav>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  let displayName = null;
  if (authedUser !== "") {
    displayName = users[authedUser].name;
  }
  return {
    displayName,
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(NavBar)) 
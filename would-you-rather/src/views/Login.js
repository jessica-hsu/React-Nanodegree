import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title';
import MyButtons from '../components/Button'
import { Redirect } from 'react-router-dom'
import {setAuthedUser} from '../actions/authUser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  state = {
    loginUser: null,
    redirect: this.props.authedUser === "" ? false : true,
    showLoginError: false
  }

  handleLogin() {
    console.log('LOGIN NOW');
    if (this.state.loginUser) {
      console.log(this.state.loginUser);
      this.props.dispatch(setAuthedUser(this.state.loginUser));
      this.setState({redirect: true});
    } else {
      this.setState({showLoginError: true});
    }
  }

  handleUserChange(event) {
    console.log("SELECTED: ", event.target.value);
    this.setState({loginUser: event.target.value, showLoginError: false});
  }

  render() {
    const {users} = this.props;

    // if already logged in or successfully logged in, redirect to homepage
    if (this.state.redirect) {
      return <Redirect to='/home'/>
    }

    return (
      <Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3>Select user to login:</h3>
            <select defaultValue={'none'} onChange={this.handleUserChange}>
                <option key={'0'} value={'none'} disabled>Select user ...</option>
                {Object.keys(users).map((u) => (
                    <option key={users[u].id} value={users[u].id}>{users[u].name}</option>
                ))}
            </select>
            <div style={{marginTop: "1rem"}}>
                <MyButtons buttonType={'login'} text={'Login'} handleLogin={this.handleLogin}/>
            </div>
            {
              this.state.showLoginError ? 
              <div style={{color: "red"}}>Please select a valid user.</div>
              :
              ""
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, users,}) {
   console.log('LOGIN', authedUser);
   console.log('LOGIN', users);
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Login) 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title';
import MyButtons from '../components/Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends Component {

  render() {
    const {users} = this.props;
    return (
      <Container fluid>
        <Row>
          <Col sm={12}><Title/></Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3>Select user to login:</h3>
            <select defaultValue={'none'}>
                <option key={'0'} value={'none'} disabled>Select user ...</option>
                {Object.keys(users).map((u) => (
                    <option key={users[u].id} value={users[u].id}>{users[u].name}</option>
                ))}
            </select>
            <div style={{marginTop: "1rem"}}>
                <MyButtons buttonType={'login'} text={'Login'}/>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}) {
   
    return {
        users
    }
}

export default connect(mapStateToProps)(Login) 
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Title extends Component {
  render() {
    return (
        <Jumbotron fluid>
        <Container>
            <h1>Would You Rather</h1>
            <p>A React Nanodegree Project</p>
        </Container>
      </Jumbotron>
    )
  }
}

export default Title
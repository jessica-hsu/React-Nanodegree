import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import './App.css';

import HomePage from './HomePage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        Starter Code
        {this.props.loading === true
          ? null
          : <HomePage/>}
      </div>
    );
  }
  
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 
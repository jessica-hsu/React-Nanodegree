import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import './App.css';


import HomePage from './HomePage';
import Login from './Login';
import AddQuestion from './AddQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {this.props.loading === true
          ? null
          : <AddQuestion/>}
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
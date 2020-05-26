import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import './App.css';


import HomePage from './HomePage';
import Login from './Login';
import AddQuestion from './AddQuestion';
import Leadership from './Leadership';
import QuestionDetails from './QuestionDetails';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {this.props.loading === true
          ? null
          : <QuestionDetails/>}
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
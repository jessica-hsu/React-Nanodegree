import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {handleInitialData} from '../actions/shared';
import './App.css';
import {setAuthedUser} from '../actions/authUser';
import HomePage from './HomePage';
import Login from './Login';
import AddQuestion from './AddQuestion';
import Leadership from './Leadership';
import QuestionDetails from './QuestionDetails';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    this.props.dispatch(setAuthedUser(""));
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Login}/>
                <Route path='/home' exact component={HomePage} />
                <Route path='/leadership' exact component={Leadership} />
                <Route path='/question/:id' component={QuestionDetails} />
                <Route path='/add' component={AddQuestion} />
              </div>}
        </div>
      </Router>
      
    );
  }
  
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 
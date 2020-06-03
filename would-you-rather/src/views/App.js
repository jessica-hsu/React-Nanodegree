import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {handleInitialData} from '../actions/shared';
import './App.css';
import {setAuthedUser} from '../actions/authUser';
import HomePage from './HomePage';
import Login from './Login';
import AddQuestion from './AddQuestion';
import Leadership from './Leadership';
import QuestionDetails from './QuestionDetails';
import NotFound from './NotFound';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

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
            : 
          <div>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/home" component={HomePage}></Route>
              <Route exact path="/leadership" component={Leadership}></Route>
              <Route path="/question/:id" component={QuestionDetails}></Route>
              <Route exact path="/add" component={AddQuestion}></Route>
              <Route exact path="/notfound" component={NotFound}></Route>
              <Route component={NotFound} />
            </Switch>
          </div>
          
        }
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
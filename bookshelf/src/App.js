import React from 'react';
import HomePage from './views/homePage';
import SearchBooks from './views/searchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component { 
  render() {
    return (
      <div className="app">
        {/* route to home page */}
        <Route exact path='/' render={() => (
          <HomePage/>
        )} />
        
        {/* route to search page */}
        <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp;

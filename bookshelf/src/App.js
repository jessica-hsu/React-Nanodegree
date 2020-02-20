import React from 'react';
import HomePage from './views/homePage';
import SearchBooks from './views/searchBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI'
import './css/styles.css';

class BooksApp extends React.Component { 

  constructor(props) {
    super(props);
    // bind so that can successfully pass to child component
    this.moveShelfHandler = this.moveShelf.bind(this);
  }

  state = {
    allBooks: [],
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * @description - call getAll from BooksAPI and sort into the three shelves
   */
  fetchData() {
    return BooksAPI.getAll().then((books) => {
      this.setState({allBooks: books})
      // filter by shelf
      this.setState((state) => ({
        currentlyReadingBooks: state.allBooks.filter((b) => b.shelf === 'currentlyReading'),
        wantToReadBooks: state.allBooks.filter((b) => b.shelf === 'wantToRead'),
        readBooks: state.allBooks.filter((b) => b.shelf === 'read')
      }))
    });
  }

  /**
   * @description - call update from BooksAPI when moving shelf
   * @param {string} newShelfType - new shelf type
   * @param {object} book - book object
   */
  moveShelf(newShelfType, book) {
    BooksAPI.update(book, newShelfType).then((response) => {
      this.fetchData();
    });
  }

  render() {
    return (
      <div className="app">
        {/* route to home page */}
        <Route exact path='/' render={() => (
          <HomePage shelves={this.state} onShelfChange={this.moveShelfHandler}/>
        )} />
        
        {/* route to search page */}
        <Route path='/search' render={({ history }) => (
          <SearchBooks allBooks={this.state.allBooks} onShelfChange={this.moveShelfHandler}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;

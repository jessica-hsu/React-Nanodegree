import React from 'react';
import HomePage from './views/homePage';
import SearchBooks from './views/searchBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI'

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

  fetchData() {
    console.log('calling getAll');
    return BooksAPI.getAll().then((books) => {
      this.setState({allBooks: books})
      console.log(this.state.allBooks);

      // filter by shelf
      this.setState((state) => ({
        currentlyReadingBooks: state.allBooks.filter((b) => b.shelf === 'currentlyReading'),
        wantToReadBooks: state.allBooks.filter((b) => b.shelf === 'wantToRead'),
        readBooks: state.allBooks.filter((b) => b.shelf === 'read')
      }))
      console.log('currentlyReading', this.state.currentlyReadingBooks);
      console.log('wantToReadBooks', this.state.wantToReadBooks);
      console.log('readBooks', this.state.readBooks);
    });
  }

  moveShelf(newShelfType, book) {
    const fromShelf = book.shelf ? book.shelf : 'none';
    const toShelf = newShelfType;
    console.log('transfer from ' + fromShelf + ' to ' + toShelf);
    BooksAPI.update(book, newShelfType).then((response) => {
      console.log(response);
      console.log(window.location.pathname)
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

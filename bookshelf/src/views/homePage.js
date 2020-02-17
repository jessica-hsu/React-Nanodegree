import React from 'react';
import * as BooksAPI from '../api/BooksAPI'
import '../css/homePage.css';
import { Link } from 'react-router-dom';
import BookShelf from '../components/bookShelf';
/**
 * Home page view to show currently reading shelf, want to read shelf, and already read shelf
 */
class HomePage extends React.Component {
  state = {
    allBooks: [],
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount() {
    console.log('calling getAll');
    BooksAPI.getAll().then((books) => {
      this.setState({allBooks: books})
      console.log(this.state.allBooks);

      // filter for currently reading shelf
      this.setState((state) => ({
        currentlyReadingBooks: state.allBooks.filter((b) => b.shelf === 'currentlyReading')
      }))
      console.log('currentlyReading', this.state.currentlyReadingBooks);

      // filter for want to read shelf
      this.setState((state) => ({
        wantToReadBooks: state.allBooks.filter((b) => b.shelf === 'wantToRead')
      }))
      console.log('wantToReadBooks', this.state.wantToReadBooks);

      // filter for read shelf
      this.setState((state) => ({
        readBooks: state.allBooks.filter((b) => b.shelf === 'read')
      }))
      console.log('readBooks', this.state.readBooks);
    });

  }

  moveShelf(newShelfType) {
    const fromShelf = this.props.book.shelf ? this.props.book.shelf : 'none';
    const toShelf = newShelfType;
    console.log('transfer from ' + fromShelf + ' to ' + toShelf);
    /*
      none to currentlyReading, wantToRead, read
      currentlyReading to none, wantToRead, read
      wantToRead to none, currentlyReading, read
      read to none, currentlyReading, wantToRead

      total 12 conditions
    */
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Virtual Book Shelf</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.state.currentlyReadingBooks} shelfType={'Currently Reading'}/>
                <BookShelf books={this.state.wantToReadBooks} shelfType={'Want to Read'}/>
                <BookShelf books={this.state.readBooks} shelfType={'Read'}/>    
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default HomePage;

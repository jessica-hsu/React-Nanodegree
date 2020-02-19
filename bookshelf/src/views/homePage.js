import React from 'react';
import * as BooksAPI from '../api/BooksAPI'
import '../css/homePage.css';
import { Link } from 'react-router-dom';
import BookShelf from '../components/bookShelf';
/**
 * Home page view to show currently reading shelf, want to read shelf, and already read shelf
 */
class HomePage extends React.Component {

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
    console.log('calling getAll');
    BooksAPI.getAll().then((books) => {
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
    });
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
                <BookShelf books={this.state.currentlyReadingBooks} shelfType={'Currently Reading'} onShelfChange={this.moveShelfHandler}/>
                <BookShelf books={this.state.wantToReadBooks} shelfType={'Want to Read'} onShelfChange={this.moveShelfHandler}/>
                <BookShelf books={this.state.readBooks} shelfType={'Read'} onShelfChange={this.moveShelfHandler}/>    
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

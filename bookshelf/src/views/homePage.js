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
  
  /* state = {
    allBooks: [],
    currentlyReadingBooks: this.props.shelves.currentlyReadingBooks,
    wantToReadBooks: this.props.shelves.wantToReadBooks,
    readBooks:this.props.shelves.readBooks
  } */

  /* componentDidUpdate(nextProps) {
    this.setState((state) => ({
      currentlyReadingBooks: this.props.shelves.currentlyReadingBooks,
      wantToReadBooks: this.props.shelves.wantToReadBooks,
      readBooks: this.props.shelves.wantToReadBooks
    }))
  } */

  /* componentDidMount() {
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

  } */

  moveShelf(newShelfType, book) {
    const fromShelf = book.shelf ? book.shelf : 'none';
    const toShelf = newShelfType;
    console.log('transfer from ' + fromShelf + ' to ' + toShelf);
    BooksAPI.update(book, newShelfType).then((response) => {
      console.log(response);
      this.refreshAllShelves();
    });
  }

  refreshAllShelves() {
    console.log('refreshing');
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

  render() {
    const {shelves, onShelfChange} = this.props;
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Virtual Book Shelf</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={shelves.currentlyReadingBooks} shelfType={'Currently Reading'} onShelfChange={onShelfChange}/>
                <BookShelf books={shelves.wantToReadBooks} shelfType={'Want to Read'} onShelfChange={onShelfChange}/>
                <BookShelf books={shelves.readBooks} shelfType={'Read'} onShelfChange={onShelfChange}/>    
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

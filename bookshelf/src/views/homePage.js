import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/bookShelf';

/**
 * Home page view to show currently reading shelf, want to read shelf, and already read shelf
 */
class HomePage extends React.Component {
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

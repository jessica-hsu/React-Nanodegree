import React from 'react';
import '../css/searchBooks.css';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI'

/**
 * Search books view. Enter query in search bar to search for books
 */
class SearchBooks extends React.Component {
  state = {
    query: '',
    bookResults: []
  }

  searchBooks(query) {
    this.setState({ query: query.trim() })
    BooksAPI.search(query).then((books) => {
      this.setState({bookResults: books})
      console.log(this.state.bookResults);
    });
  }
  
  render() {
    const { query } = this.state;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      )
    }
  }
  
  export default SearchBooks;
import React from 'react';
import '../css/searchBooks.css';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI'
import Book from '../components/book';
/**
 * Search books view. Enter query in search bar to search for books
 */
class SearchBooks extends React.Component {

  state = {
    query: '',
    bookResults: []
  }

  searchBooks(query) {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query).then((results) => {
        this.determineSearchResults(results);
      });
    } else {
      this.setState({bookResults: []});
    }
    
  }

  determineSearchResults(results) {
    if (results) {
      if (results.error) {
        this.setState({bookResults: []});
      } else {
        this.setState({bookResults: results});
      }
    } else {
      this.setState({bookResults: []});
    }
  }

  render() {
    const { query, bookResults } = this.state;
    const { allBooks, onShelfChange } = this.props;

    let displayResultsUI;
    if (bookResults && bookResults.length > 0 && query) {
      displayResultsUI = bookResults.map((book) => (
        <li key={book.id}>
          <Book book={book} onShelfChange={onShelfChange} existingBooks={allBooks}/>
        </li>  
      ));
    }
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {displayResultsUI}
            </ol>
          </div>
        </div>
      )
    }
  }
  
  export default SearchBooks;
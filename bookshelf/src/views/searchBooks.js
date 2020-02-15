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
    this.setState({ query: query.trim() })
    if (query) {
      BooksAPI.search(query).then((results) => {
        this.determineSearchResults(results);
      });
    }
    
  }

  determineSearchResults(results) {
    if (results) {
      if (results.error) {
        console.log("no results");
      } else {
        this.setState({bookResults: results});
        console.log(this.state.bookResults);
      }
    } else {
      console.log('enter something');
    }
  }
  
  render() {
    const { query, bookResults } = this.state;
    
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
            {
              bookResults.map((book) => (
                <li key={book.id}>
                  <Book bookImage={book.imageLinks.smallThumbnail} bookTitle={book.title} bookAuthor={book.authors}/>
                </li>  
              ))
            }
            </ol>
          </div>
        </div>
      )
    }
  }
  
  export default SearchBooks;
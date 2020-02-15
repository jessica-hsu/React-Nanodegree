import React, {Component} from 'react';
import Book from './book';
import PropTypes from 'prop-types';

/**
 * component for each book shelf (i.e. currently reading, want to read, read, etc)
 */
class BookShelf extends Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        shelfType: PropTypes.string.isRequired,
    }

    render() {
        const { books, shelfType } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfType}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => (
                                <li key={book.id}><Book book={book}/></li>  
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
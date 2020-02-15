import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Component for each book. Includes book cover, title, author
 */
class Book extends Component {

    static PropTypes = {
        bookImage: PropTypes.array,
        bookTitle: PropTypes.string.isRequired,
        bookAuthor: PropTypes.array.isRequired
    }

    /**
     * @description - take array of authors and concatenate each into string form
     * @param {string[]} authorArray - array of authors
     * @returns {string} - return all authors in array in string form
     */
    buildAuthorString(authorArray){
        const arrLen = authorArray.length;
        if (arrLen === 0) {
            return "Unknown";
        } else if (arrLen === 1) {
            return authorArray[0];
        } else {
            let allAuthors = authorArray[0];
            for (var i = 1; i < arrLen; i++) {
                allAuthors = allAuthors + ", " + authorArray[i];
            }
            return allAuthors;
        }
    }

    render() {
        const { bookImage, bookTitle, bookAuthor } = this.props;
        const authorString = this.buildAuthorString(bookAuthor);
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})`}}></div>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{authorString}</div>
           </div>
        );
    }
}

export default Book;
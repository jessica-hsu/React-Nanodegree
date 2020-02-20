import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Component for each book. Includes book cover, title, author
 */
class Book extends Component {

    static PropTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        existingBooks: PropTypes.array
    }

    /**
     * @description - take array of authors and concatenate each into string form
     * @param {string[]} authorArray - array of authors
     * @returns {string} - return all authors in array in string form
     */
    buildAuthorString(authorArray){
        if (authorArray) {
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
        } else {
            return "Unknown";
        }
    }

    /**
     * @description - check if title exists and if not, return Unknown
     * @param {string} title - title of book
     */
    getBookTitleString(title) {
        if (title) {
            return title;
        } else {
            return "Unknown";
        }
    }

    /**
     * @description - set thumbnail url
     * @param {object} imageObj - object holding image information of book
     */
    getBookImageUrl(imageObj) {
        if (imageObj && imageObj.smallThumbnail) {
            return imageObj.smallThumbnail;
        } else if (imageObj && imageObj.thumbnail) {
            return imageObj.thumbnail;
        } else {
            return '';
        }
    }

    /**
     * @description - determine if book is already on a shelf
     * @param {object} book - book object
     * @param {array} existingBooks - array of book objects on shelves
     */
    figureOutIfAlreadyOnShelf(book, existingBooks) {
        if (book.shelf) {
            return book.shelf;
        } else {
            let shelf = 'none';
            if (existingBooks) {
                for (var i=0; i < existingBooks.length; i++) {
                    if (existingBooks[i].id === book.id) {
                        shelf = existingBooks[i].shelf;
                        break;
                    }
                }
            }
            return shelf;
        }
    }

    render() {
        const { book, onShelfChange, existingBooks} = this.props;
        const authorString = this.buildAuthorString(book.authors);
        const title = this.getBookTitleString(book.title);
        const imageUrl = this.getBookImageUrl(book.imageLinks);
        const bookShelf = this.figureOutIfAlreadyOnShelf(book, existingBooks);
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})`}}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={bookShelf} onChange={(event) => onShelfChange(event.target.value, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authorString}</div>
           </div>
        );
    }
}

export default Book;
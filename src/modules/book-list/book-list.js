import React from 'react';
import BookListItem from './book-list-item/book-list-item.js';
import bookListItems from './book-list-items.js';

class BookList extends React.Component {
  render () {
    return <div>
            { bookListItems.map((book) => <BookListItem name={book.name}/>) }
          </div>
  }
}

export default BookList;
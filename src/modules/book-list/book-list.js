import React from 'react';
import BookListItem from './book-list-item/book-list-item.js';
import bookListItems from './book-list-items.js';


import './book-list.css';
import style from './book-list.css.json';

class BookList extends React.Component {
  render () {
    return <div className={style.list}>
            { bookListItems.map((book, index) => <BookListItem book={book} key={index} />) }
          </div>
  }
}

export default BookList;
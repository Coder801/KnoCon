import React from 'react';
import books from '../book-list/book-list-items.js';
import './book-item.css';


export default class BookItem extends React.Component {
  render () {
    const bookId = Number(this.props.params.bookId);
    const currentBook = _.find(books, { id: bookId });
    return (
      <div>
        <figure>
          <img src="http://lorempixel.com/400/200/" alt="" />
        </figure>
        <div className="desc">
          <h2>{ currentBook.name }</h2>
          <p>{ currentBook.desc }</p>
        </div>
      </div>
      )
  }
}
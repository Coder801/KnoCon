import React from 'react';
import { Link } from 'react-router';

class BookListItem extends React.Component {
  render () {
    return <Link to={`/book/${this.props.book.id}`}><div className="book-list-item">{this.props.book.name}</div></Link>
  }
}

export default BookListItem;
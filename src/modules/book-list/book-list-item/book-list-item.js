import React from 'react';

class BookListItem extends React.Component {
  render () {
    return <div className="book-list-item">{this.props.name}</div>
  }
}

export default BookListItem;
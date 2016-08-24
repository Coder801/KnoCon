import { Link } from 'react-router';

import './book-list-item.css';

import style from './book-list-item.css.json'

class BookListItem extends React.Component {
  render () {
    return <Link className={style.item} to={`/book/${this.props.book._id}`}><div className="book-list-item">{this.props.book.title}</div></Link>
  }
}

export default BookListItem;
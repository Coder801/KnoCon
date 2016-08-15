import books from '../book-list/book-list.json';

import './book-item.css';
import style from './book-item.css.json';


export default class BookItem extends React.Component {
  render () {
    const bookId = Number(this.props.params.bookId);
    const currentBook = _.find(books, { id: bookId });
    return (
      <div className={style.item}>
        <figure className={style.img}>
          <img src="http://lorempixel.com/400/200/" alt="" />
        </figure>
        <div className={style.desc}>
          <h2>{ currentBook.name }</h2>
          <p>{ currentBook.desc }</p>
        </div>
      </div>
      )
  }
}
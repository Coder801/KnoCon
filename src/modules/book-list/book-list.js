import config from '../../configs/app.config';
import BookListItem from './book-list-item/book-list-item.js';

import './book-list.css';
import style from './book-list.css.json';

class BookList extends React.Component {
  componentWillMount () {
    this.setState({ bookList: [] });
    axios.get(config.entities.books)
      .then((res) => {
        this.setState({ bookList: res.data });
      });
  }

  render() { 
    return <div className={style.list}>
            { this.state.bookList.map((book, index) => <BookListItem book={book} key={index} />) }
          </div>
  }
}

export default BookList;

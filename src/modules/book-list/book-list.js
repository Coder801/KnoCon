import BookListItem from './book-list-item/book-list-item.js';

import './book-list.css';
import style from './book-list.css.json';

class BookList extends React.Component {
  componentWillMount () {
    this.setState({ bookList: [] });
    request.get('http://localhost:3000/api/v1/books')
      .withCredentials()
      .then((res) => {
        this.setState({ bookList: res.body });
      });
  }

  render() { 
    return <div className={style.list}>
            { this.state.bookList.map((book, index) => <BookListItem book={book} key={index} />) }
          </div>
  }
}

export default BookList;

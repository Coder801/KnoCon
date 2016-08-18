import './book-item.css';
import style from './book-item.css.json';


export default class BookItem extends React.Component {
  componentWillMount () {
    const bookId = Number(this.props.params.bookId);
    this.setState({ book: [] });
    request.get(`http://localhost:3000/api/v1/books/${bookId}`)
      .withCredentials()
      .then((res) => {
        this.setState({ book: res.body });
      });
  }

  render () {
    const book = this.state.book;
    return (
      <div className={style.item}>
        <figure className={style.img}>
          <img src={book.imageUrl} alt={book.name} />
        </figure>
        <div className={style.desc}>
          <h2>{ book.name }</h2>
          <p>{ book.desc }</p>
        </div>
      </div>
      )
  }
}
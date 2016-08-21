import './book-item.css';
import config from '../../configs/app.config';
import style from './book-item.css.json';


export default class BookItem extends React.Component {
  componentWillMount () {
    const bookId = Number(this.props.params.bookId);
    this.setState({ book: [] });
    axios.get(`${config.entities.books}/${bookId}`)
      .then((res) => {
        this.setState({ book: res.data });
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
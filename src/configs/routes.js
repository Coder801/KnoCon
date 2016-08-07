import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppComponent from '../modules/app/app.component.js';
import BookList from '../modules/book-list/book-list.js';
import BookItem from '../modules/book-item/book-item.js';

class AppRouter extends React.Component {
  render () {
    return <Router history={browserHistory}>
            <Route path="/" component={AppComponent}>
                <IndexRoute component={BookList} />
                <Route path="book/:bookId" component={BookItem} />
            </Route>
          </Router>
  }
}

export default AppRouter;
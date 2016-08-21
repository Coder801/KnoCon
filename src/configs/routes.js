import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppComponent from '../modules/app/app.component.js';
import BookList from '../modules/book-list/book-list.js';
import BookItem from '../modules/book-item/book-item.js';

class AppRouter extends React.Component {
  render () {
    return <Router history={hashHistory}>
            <Route path="/" component={AppComponent}>
                <IndexRoute component={BookList} />
                <Route path="book/:bookId" component={BookItem} />
            </Route>
          </Router>
  }
}

export default AppRouter;

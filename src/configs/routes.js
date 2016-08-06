import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import BookList from '../modules/book-list/book-list.js';

class AppRouter extends React.Component {
  render () {
    return <Router history={browserHistory}>
            <Route path="/" component={BookList}>
              <Route path="book/:bookId" component={BookItem}>
              </Route>
            </Route>
          </Router>
  }
}

export default AppRouter;
import React from 'react';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render () {
    return <div>
            <Link to="/">See all books</Link>
            { this.props.children }
          </div>
  }
}

export default AppComponent;
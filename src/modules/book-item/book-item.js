import React from 'react';


export default class BookItem extends React.Component {
  render () {
    return (
      <div>
        <figure>
          <img src="http://lorempixel.com/400/200/" alt="" />
        </figure>
        <div className="desc">
          <h2>{ this.props.name }</h2>
          <p>{ this.props.desc }</p>
        </div>
      </div>
      )
  }
}
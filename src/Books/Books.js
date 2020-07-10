import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {findBook} from '../helpers';
import TCContext from '../Context/TCContext';

export default class Books extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = TCContext;

  render() {
    const props = this.props
    const bookId = props.id
    const { books=[] } = this.context
    const book = findBook (books, bookId) || {}
    console.log('this is first props', props)
    return (
      <div>
        <section>
          <Link to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>
        </section>
      </div>
    )
  }
}

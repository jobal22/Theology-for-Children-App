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
    const { books=[], chapters=[], verses=[] } = this.context
    const book = findBook (books, bookId) || {}
    const chapter = chapters.filter(chapter=>book.id === chapter.bookId)
    console.log('has it changed?', books, chapter)
    return (
      <div>
        <header>
          <Link to={`/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>
        </header>
        {/* <div>
          {chapters.map((chapter) =>
            <Chapters />
          )}
        </div> */}
      </div>
    )
  }
}

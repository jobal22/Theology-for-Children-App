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
    const chapter = props.chapters
    const { books=[], chapters=[], verses=[] } = this.context
    const book = findBook (books, bookId) || {}
    // const chapter = chapters.filter(chapter=>book.id === chapter.bookId)
    console.log('this is first props', props)
    return (
      <div>
        <header>
          <Link to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>
        </header>
        {/* <div>
          {chapter.map((c) =>
            <p>{c.name}</p>
          )}
        </div> */}
        {/* <section>
            {books.map(book => 
            <Link to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section> */}

      </div>
    )
  }
}

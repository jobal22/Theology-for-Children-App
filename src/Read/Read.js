import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import Chapters from '../Chapters/Chapters';
import {findBook} from '../helpers';
import './Read.css';

export default class Read extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = TCContext;
render() {
    const { books, chapters, verses } = this.context;
    const {bookId} = this.props.match.params.bookId;
    const chapter = chapters.filter(chapter=>bookId === chapter.bookId)
    return (
      <div>
        <section>
        {books.map(book=>
          <h2 key={book.id}>{book.name}</h2>)}
        </section>
        <section>
          {chapter.map(c=>
            <Chapters 
              key={c.id}
              id={c.id}
              name={c.name}
              verse = {verses.filter(verse=> verse.chapterid === c.id).map(v1=>v1)}
            />)}
        </section>  
      </div>
    )
  }
}
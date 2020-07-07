import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import Chapters from '../Chapters/Chapters';
import Verses from '../Verses/Verses';
import {findBook, findVerse} from '../helpers';
import './Read.css';

export default class Read extends Component {

  static contextType = TCContext;

  render() {
    const { books=[], chapters=[], verses=[] } = this.context
    const bookId = this.props.match.params
    const book = findBook (books, bookId) || {}
    // const dog = findChapter (chapters, bookId)
    const chapter = chapters.filter(c=>c.bookId = bookId);
    const verse = verses.filter(v=>v.chapterId === chapter.id)
    const d = findVerse (verses, chapter) || {}
    console.log('jasdfasf', books, chapters)
    return (
      <div>
        <section>
          <h1>{book.name}</h1>
        </section>
        {/* <section>
          {chapter.map(chapter =>
            <div key={chapter.id}>
            <Chapters 
              key={chapter.id}
              id={chapter.id}
              name={chapter.name}
              book={chapter.book}
              verses={verses.filter(verse =>
                verse.chapterId === chapter.id)}
            />
            </div>
          )}
          </section> */}

          {chapter.map(c=>
          <section>
            <h2>{c.name}</h2>
            {/* {verse.map(v=>
              <p>{v.name}</p>)} */}
            <Verses />
          </section>)}
        {/* <section>
          {titusChapters.map(chapter =>
            <h3 key={chapter.id}>{chapter.name}</h3>
          )}

          <p> Chapter One </p>
          <p>INSERT CHAPTER ONE CONTENT WITH INTERATIVE BUTTONS</p>
        </section>
        <section>
          <p> Chapter Two </p>
          <p>INSERT CHAPTER Two CONTENT WITH INTERATIVE BUTTONS</p>
        </section>
        <section>
          <p> Chapter Three </p>
          <p>INSERT CHAPTER Three CONTENT WITH INTERATIVE BUTTONS</p>
        </section> */}
      </div>
    )
  }
}

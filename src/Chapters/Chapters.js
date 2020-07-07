import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import {findChapter} from '../helpers';

export default class Chapters extends Component {

  static contextType = TCContext;

  render() {
    const props = this.props
    const chapterId = props.id
    const { books=[], chapters=[], verses=[] } = this.context
    const chapter = findChapter(chapters, chapterId) || {}
    const verse = verses.filter(verses=>chapter.id === verses.chapterId)
    console.log('look', chapter, books)
    return (
      <div>
        <header>
          <h2>{chapter.id}{chapter.name}</h2>
        </header>
      </div>
    )
  }
}

import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import {findChapter } from '../helpers';
import StringReplace from '../stringReplace/stringReplace';
import './Chapters.css'

export default class Chapters extends Component {
  
  static contextType = TCContext;

  render() {
    const { chapters=[] } = this.context;
    const props = this.props;
    const chapterId = props.id;
    const chapter = findChapter(chapters, chapterId) || {};
    const verses = props.verse;

    return (
      <div className='Chapters'>
        <header className='chapterTitle'>
          <h3 key={chapter.id}>{chapter.name}</h3>
        </header>
        <hr></hr>
        <main>
          {verses.map(verse=>
          <StringReplace 
            key={verse.id}
            id={verse.id}
            name={verse.name}
            content={verse.content}
          />
          )}
        </main>
      </div>
    )
  }
}

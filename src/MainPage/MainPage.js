import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import Books from '../Books/Books';
import './MainPage.css';
import Chapters from '../Chapters/Chapters';

export default class MainPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
static contextType = TCContext;

  render() {
    const { books=[], chapters=[] } = this.context
    console.log('hey now', books, chapters)
    return (
      <div className="MainPage">
        {/* <nav className="Landing__nav" >Nav</nav> */}
        <main>
          <header className="Header">
          <h1>Theology for Children</h1>
          </header>

          <section>
            <p>
              <b>Theology for Children</b> 
              provides interactive Bible reading and reading plans for young readers using the English Standard Version
            </p>
          </section>

          {/* <section>
            {books.map(book => 
            <div key={book.id}>
              <Books 
                key={book.id}
                id={book.id}
                name={book.name}
                chapters={chapters.filter(chapter =>
                  chapter.book === book.name)}
              />
              <p>"insert preview image"</p>

            </div>)}
        </section> */}

          {/* some times this returns wo id */}
          <section>
            {books.map(book => 
            <Link to={`/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section>

        <section>
            <Link to={'/dailyreader'}><h2>Daily Read Plan</h2></Link>
            <p>"insert preview image"</p>
        </section>
        </main>
        {/* <footer className="Landing__footer"></footer> */}
      </div>
    )
  }
}

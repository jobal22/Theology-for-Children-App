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
    const { books, chapters, plantitles } = this.context
    console.log('hey now', chapters)
    return (
      <div className="MainPage">
        {/* <nav className="Landing__nav" >Nav</nav> */}
        <main>
          <header className="Header">
          <h1>Theology for Children</h1>
          </header>

          {/* <section>
            {books.map(book => 
            <div key={book.id}>
              <Books 
                key={book.id}
                id={book.id}
                name={book.name}
                chapters={chapters.filter(chapter =>
                  chapter.bookid === book.id)}
              />
              <p>"insert preview image"</p>

            </div>)}
        </section>
 */}
          {/* some times this returns wo id */}
          <section>
            {books.map(book => 
            <Link to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section>

        <section>
            <h2>Daily Reading Plan</h2>
            {plantitles.map(pt =>
            <Link to={`/dailyreader/${pt.id}`} key={pt.id}><h2>{pt.name}</h2></Link>)}
            <p>"insert preview image"</p>
        </section>
        </main>
        {/* <footer className="Landing__footer"></footer> */}
      </div>
    )
  }
}

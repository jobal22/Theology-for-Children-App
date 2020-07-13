import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import './MainPage.css';

export default class MainPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
static contextType = TCContext;

  render() {
    const { books, plantitles } = this.context
    return (
      <div className="MainPage">
        {/* <header className="Header">
          <h1>Theology for Children</h1>
        </header> */}
        <main className='MPInfo'>
          {books.map(book => 
          <Link className='MPILink' to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>)}
          <hr></hr>
          <section>
            {/* <h2>Daily Reading Plan</h2> */}
            {plantitles.map(pt =>
            <Link className='MPILink' to={`/dailyreader/${pt.id}`} key={pt.id}><h2>{pt.name}</h2></Link>)}
          </section>
        </main>
      </div>
    )
  }
}

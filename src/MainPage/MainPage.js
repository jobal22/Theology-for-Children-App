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
      <div className="MPMain">
        <section className='MPInfo'>
          {books.map(book =>
          <p className='small'>
            <Link className='MPILink' to={`/main/${book.id}`} key={book.id}><h2>Read {book.name}</h2></Link>
          </p>)}
            {plantitles.map(pt =>
            <p>
            <Link className='MPILink' to={`/dailyreader/${pt.id}`} key={pt.id}><h2>{pt.name}</h2></Link>
            </p>)}
        </section>
      </div>
    )
  }
}

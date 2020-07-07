import React, { Component } from 'react';
import TCContext from '../Context/TCContext';

export default class Verses extends Component {

  static contextType = TCContext;

  render() {
    const { books=[], chapters=[], verses=[] } = this.context
    console.log('jobla now', books, chapters)
    return (
      <div>
        <h2>{verses.name}</h2>
      </div>
    )
  }
}

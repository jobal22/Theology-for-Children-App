import React, { Component } from 'react';
import TCContext from '../Context/TCContext';

export default class Verses extends Component {

  static contextType = TCContext;

  render() {
    const { books=[], chapters=[], verses=[] } = this.context
    const props = this.props.plan.map(v=> v.verses)
    const verse = props.map(g=> verses[g])
    console.log('jobla now', verse)
    return (
      <div>
        {/* <h2>{verses.name} hey</h2> */}
        <h2>hey</h2>

      </div>
    )
  }
}

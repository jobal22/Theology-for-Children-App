import React, { Component } from 'react';
import TCContext from '../Context/TCContext';

export default class Verses extends Component {

  static contextType = TCContext;

  render() {
    const { verses=[] } = this.context
    const props = this.props.plan.map(v=> v.verses)
    const verse = props.map(g=> verses[g])
    return (
      <div>
        <h2>hey</h2>
      </div>
    )
  }
}

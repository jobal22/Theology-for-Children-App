import React, { Component } from 'react';
import TCContext from './Context/TCContext';
import reactStringReplace from 'react-string-replace';
import Popup from "reactjs-popup";

export default class stringReplace extends Component {

  static contextType = TCContext;

  render() {
    const {contents} = this.context
    const props = this.props;
    const verse = props.content;
    const content = contents.map(c=>
      reactStringReplace(verse, c.word, (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        <div>
          <h2>{c.word}</h2>
          <p>{c.content}</p>
        </div>
      </Popup>
        ))

        )

    console.log('this is new', content)

    return (
      <div>
        {/* <p>{replacedQuarrels}</p> */}
        {contents.map(c=>
        reactStringReplace(verse, c.word, (match, i) => (
        <Popup trigger={<button >{match}</button>} position='right center'>
          <div>
            <h2>{c.word}</h2>
            <p>{c.content}</p>
          </div>
        </Popup>
          ))

          )}
      </div>
    )
  }
}

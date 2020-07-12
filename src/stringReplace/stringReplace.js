import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import reactStringReplace from 'react-string-replace';
import {servantContent, apostleContent, faithContent, truthContent, eternalLifeContent, preachingContent, saviorContent, eldersContent, reproachContent, oneWifeContent, arrogantContent, quickTemperedContent, selfControlledContent, soundDoctrineContent, insubordinateContent, emptyTalkersContent, deceiversContent, shamefulGainContent, gluttonsContent, pureContent, disobedientContent, quarrelsContent } from '../PopUp/PopUp';
import Popup from "reactjs-popup";

export default class stringReplace extends Component {

  static contextType = TCContext;

  state = {
    verse: this.props.content,
    replactObject: null,
    regularExpression: null,
    contents : this.context.contents,
    words: null
  }

  componentDidMount() {
    const contents = this.context.contents;
    const words = contents.map(content => content.word.toLowerCase());
    const regularExpression = new RegExp(words.join('[:;.,-]?|'), 'gi');
    this.setState({regularExpression, words, contents})
  }

  render() {
    const {verse, regularExpression, words, contents} = this.state
    const formatPopup = (text) => {
      const foundContent = contents.find(content => {
        return content.word.toLowerCase() === text.toLowerCase()
      })
      if (foundContent && foundContent.word && foundContent.content) {
        return <Popup trigger={<button >{text}</button>} position='right center'>
          <div>
            <h2>{foundContent.word}</h2>
            <p>{foundContent.content}</p>
          </div>
        </Popup>
      } else {
        return <Popup trigger={<button >{text}</button>} position='right center'>
        <div>
          <h2>{text}</h2>
          <p>{' '}</p>
        </div>
      </Popup>
      }
    }
    
    return (
      <React.Fragment>
        <p>{(regularExpression && words && contents) ? verse.split(' ').map(i => {
          if (regularExpression.test(i)) {
          return <span>{formatPopup(i)}</span>
          } else {
            return ` ${i} `
          }
        }) : verse && verse}</p>
      </React.Fragment>
    )
  }
}

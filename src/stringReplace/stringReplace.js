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
    const formatPopup = (text) => {
      const foundContent = contents.find(content => {
        return content.word.toLowerCase() === text.toLowerCase()
      })
      return <Popup trigger={<button >{text}</button>} position='right center'>
      <div>
        <h2>{foundContent.word}</h2>
        <p>{foundContent.content}</p>
      </div>
    </Popup>
    }
    const replaceObject = {};
    const populateReplaceObject = () => {
      words.forEach(word => {
        replaceObject[word] = <span>{formatPopup(word)}</span>
    });
    }
    populateReplaceObject()
    const replaceMultipleStrings = (verse, regExp, matchObject) => {
      return verse.replace(regExp, (matched) => {
        return (<span>{matchObject[matched]}</span>)
      })
      // return reactStringReplace(verse, regExp, (match, i) => {
      //   console.log('look for match', match)
      //   return matchObject[match]
      // });
    }

      
    const testVerse = replaceMultipleStrings(this.state.verse, regularExpression, replaceObject)
    // console.log('working with Audax', testVerse)

    this.setState({replaceObject, regularExpression, words, contents})
  }

  render() {
    const {verse, replaceObject, regularExpression, words, contents} = this.state
    // console.log ('is this array', verse)
    const formatPopup = (text) => {
      const foundContent = contents.find(content => {
        return content.word.toLowerCase() === text.toLowerCase()
      })
      const foundContent1 = contents.filter(content => {
        return content.word.toLowerCase() === text.toLowerCase()
      })
      // console.log('found content', foundContent1)
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
        // console.log ('IS THIS FOUND', foundContent1, text)
      }
      // console.log('LOOK FOR WORDS', words)
    //   return <Popup trigger={<button >{text}</button>} position='right center'>
    //   <div>
    //     <h2>{foundContent.word}</h2>
    //     <p>{foundContent.content}</p>
    //   </div>
    // </Popup>
    }


    // const replacedServant = reactStringReplace(verse, 'servant', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {servantContent}
    //   </Popup>
    // ));
    // const replacedApostle = reactStringReplace(replacedServant, 'apostle', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {apostleContent}
    //   </Popup>
    // ));
    // const replacedFaith = reactStringReplace(replacedApostle, 'faith', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {faithContent}
    //   </Popup>
    // ));
    // const replacedTruth = reactStringReplace(replacedFaith, 'truth', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {truthContent}
    //   </Popup>
    // ));
    // const replacedEternalLife = reactStringReplace(replacedTruth, 'eternal', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {eternalLifeContent}
    //   </Popup>
    // ));
    // const replacedPreaching = reactStringReplace(replacedEternalLife, 'preaching', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {preachingContent}
    //   </Popup>
    // ));
    // const replacedSavior = reactStringReplace(replacedPreaching, 'savior', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {saviorContent}
    //   </Popup>
    // ));
    // const replacedElders = reactStringReplace(replacedSavior, 'elders', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {eldersContent}
    //   </Popup>
    // ));
    // const replacedReproach = reactStringReplace(replacedElders, 'reproach', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {reproachContent}
    //   </Popup>
    // ));
    // const replacedOneWife = reactStringReplace(replacedReproach, 'one', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {oneWifeContent}
    //   </Popup>
    // ));
    // const replacedArrogant = reactStringReplace(replacedOneWife, 'arrogant', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {arrogantContent}
    //   </Popup>
    // ));
    // const replacedQuickTempered = reactStringReplace(replacedArrogant, 'quick', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {quickTemperedContent}
    //   </Popup>
    // ));
    // const replacedSelfControlled = reactStringReplace(replacedQuickTempered, 'self', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {selfControlledContent}
    //   </Popup>
    // ));
    // const replacedSoundDoctrine = reactStringReplace(replacedSelfControlled, 'sound', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {soundDoctrineContent}
    //   </Popup>
    // ));
    // const replacedInsubordinate = reactStringReplace(replacedSoundDoctrine, 'insubordinate', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {insubordinateContent}
    //   </Popup>
    // ));
    // const replacedEmptyTalkers = reactStringReplace(replacedInsubordinate, 'empty', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {emptyTalkersContent}
    //   </Popup>
    // ));
    // const replacedDeceivers = reactStringReplace(replacedEmptyTalkers, 'deceivers', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {deceiversContent}
    //   </Popup>
    // ));
    // const replacedShamefulGain = reactStringReplace(replacedDeceivers, 'shameful', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {shamefulGainContent}
    //   </Popup>
    // ));
    // const replacedGluttons= reactStringReplace(replacedShamefulGain, 'gluttons', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {gluttonsContent}
    //   </Popup>
    // ));
    // const replacedPure = reactStringReplace(replacedGluttons, 'pure', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {pureContent}
    //   </Popup>
    // ));
    // const replacedDisobedient = reactStringReplace(replacedPure, 'disobedient', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {disobedientContent}
    //   </Popup>
    // ));
    // const replacedQuarrels = reactStringReplace(replacedDisobedient, 'quarrels', (match, i) => (
    //   <Popup trigger={<button >{match}</button>} position='right center'>
    //     {quarrelsContent}
    //   </Popup>
    // ));

    return (
      <React.Fragment>
        <p>{(regularExpression && replaceObject && words && contents) ? verse.split(' ').map(i => {
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

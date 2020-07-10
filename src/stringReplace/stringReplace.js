import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import reactStringReplace from 'react-string-replace';
import {servantContent, apostleContent, faithContent, truthContent, eternalLifeContent, preachingContent, saviorContent, eldersContent, reproachContent, oneWifeContent, arrogantContent, quickTemperedContent, selfControlledContent, soundDoctrineContent, insubordinateContent, emptyTalkersContent, deceiversContent, shamefulGainContent, gluttonsContent, pureContent, disobedientContent, quarrelsContent } from '../PopUp/PopUp';
import Popup from "reactjs-popup";

export default class stringReplace extends Component {

  static contextType = TCContext;

  render() {
    const props = this.props;
    const verse = props.content;

    const replacedServant = reactStringReplace(verse, 'servant', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {servantContent}
      </Popup>
    ));
    const replacedApostle = reactStringReplace(replacedServant, 'apostle', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {apostleContent}
      </Popup>
    ));
    const replacedFaith = reactStringReplace(replacedApostle, 'faith', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {faithContent}
      </Popup>
    ));
    const replacedTruth = reactStringReplace(replacedFaith, 'truth', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {truthContent}
      </Popup>
    ));
    const replacedEternalLife = reactStringReplace(replacedTruth, 'eternal', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {eternalLifeContent}
      </Popup>
    ));
    const replacedPreaching = reactStringReplace(replacedEternalLife, 'preaching', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {preachingContent}
      </Popup>
    ));
    const replacedSavior = reactStringReplace(replacedPreaching, 'savior', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {saviorContent}
      </Popup>
    ));
    const replacedElders = reactStringReplace(replacedSavior, 'elders', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {eldersContent}
      </Popup>
    ));
    const replacedReproach = reactStringReplace(replacedElders, 'reproach', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {reproachContent}
      </Popup>
    ));
    const replacedOneWife = reactStringReplace(replacedReproach, 'one', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {oneWifeContent}
      </Popup>
    ));
    const replacedArrogant = reactStringReplace(replacedOneWife, 'arrogant', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {arrogantContent}
      </Popup>
    ));
    const replacedQuickTempered = reactStringReplace(replacedArrogant, 'quick', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {quickTemperedContent}
      </Popup>
    ));
    const replacedSelfControlled = reactStringReplace(replacedQuickTempered, 'self', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {selfControlledContent}
      </Popup>
    ));
    const replacedSoundDoctrine = reactStringReplace(replacedSelfControlled, 'sound', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {soundDoctrineContent}
      </Popup>
    ));
    const replacedInsubordinate = reactStringReplace(replacedSoundDoctrine, 'insubordinate', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {insubordinateContent}
      </Popup>
    ));
    const replacedEmptyTalkers = reactStringReplace(replacedInsubordinate, 'empty', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {emptyTalkersContent}
      </Popup>
    ));
    const replacedDeceivers = reactStringReplace(replacedEmptyTalkers, 'deceivers', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {deceiversContent}
      </Popup>
    ));
    const replacedShamefulGain = reactStringReplace(replacedDeceivers, 'shameful', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {shamefulGainContent}
      </Popup>
    ));
    const replacedGluttons= reactStringReplace(replacedShamefulGain, 'gluttons', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {gluttonsContent}
      </Popup>
    ));
    const replacedPure = reactStringReplace(replacedGluttons, 'pure', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {pureContent}
      </Popup>
    ));
    const replacedDisobedient = reactStringReplace(replacedPure, 'disobedient', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {disobedientContent}
      </Popup>
    ));
    const replacedQuarrels = reactStringReplace(replacedDisobedient, 'quarrels', (match, i) => (
      <Popup trigger={<button >{match}</button>} position='right center'>
        {quarrelsContent}
      </Popup>
    ));

    return (
      <div>
        <p>{replacedQuarrels}</p>
      </div>
    )
  }
}

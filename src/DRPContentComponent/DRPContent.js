import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import reactStringReplace from 'react-string-replace';
import {servantContent, apostleContent, faithContent, truthContent, eternalLifeContent, preachingContent, saviorContent, eldersContent, reproachContent, oneWifeContent, arrogantContent, quickTemperedContent, selfControlledContent, soundDoctrineContent, insubordinateContent, emptyTalkersContent, deceiversContent, shamefulGainContent, gluttonsContent, pureContent, disobedientContent, quarrelsContent } from '../PopUpComponent/PopUp';
import Popup from "reactjs-popup";
import './DRPContent.css'

export default class stringReplace extends Component {

  static contextType = TCContext;

  render() {
    const props = this.props;
    const verse = props.content;

    const replacedServant = reactStringReplace(verse, 'servant', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {servantContent}
      </Popup>
    ));
    const replacedApostle = reactStringReplace(replacedServant, 'apostle', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {apostleContent}
      </Popup>
    ));
    const replacedFaith = reactStringReplace(replacedApostle, 'faith', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {faithContent}
      </Popup>
    ));
    const replacedTruth = reactStringReplace(replacedFaith, 'truth', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {truthContent}
      </Popup>
    ));
    const replacedEternalLife = reactStringReplace(replacedTruth, 'eternal life', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {eternalLifeContent}
      </Popup>
    ));
    const replacedPreaching = reactStringReplace(replacedEternalLife, 'preaching', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {preachingContent}
      </Popup>
    ));
    const replacedSavior = reactStringReplace(replacedPreaching, 'savior', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {saviorContent}
      </Popup>
    ));
    const replacedElders = reactStringReplace(replacedSavior, 'elders', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {eldersContent}
      </Popup>
    ));
    const replacedReproach = reactStringReplace(replacedElders, 'reproach', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {reproachContent}
      </Popup>
    ));
    const replacedOneWife = reactStringReplace(replacedReproach, 'one wife', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {oneWifeContent}
      </Popup>
    ));
    const replacedArrogant = reactStringReplace(replacedOneWife, 'arrogant', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {arrogantContent}
      </Popup>
    ));
    const replacedQuickTempered = reactStringReplace(replacedArrogant, 'quick-tempered', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {quickTemperedContent}
      </Popup>
    ));
    const replacedSelfControlled = reactStringReplace(replacedQuickTempered, 'self-controlled', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {selfControlledContent}
      </Popup>
    ));
    const replacedSoundDoctrine = reactStringReplace(replacedSelfControlled, 'sound doctrine', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {soundDoctrineContent}
      </Popup>
    ));
    const replacedInsubordinate = reactStringReplace(replacedSoundDoctrine, 'insubordinate', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {insubordinateContent}
      </Popup>
    ));
    const replacedEmptyTalkers = reactStringReplace(replacedInsubordinate, 'empty talker', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {emptyTalkersContent}
      </Popup>
    ));
    const replacedDeceivers = reactStringReplace(replacedEmptyTalkers, 'deceivers', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {deceiversContent}
      </Popup>
    ));
    const replacedShamefulGain = reactStringReplace(replacedDeceivers, 'shameful gain', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {shamefulGainContent}
      </Popup>
    ));
    const replacedGluttons= reactStringReplace(replacedShamefulGain, 'gluttons', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
        {gluttonsContent}
      </Popup>
    ));
    const replacedPure = reactStringReplace(replacedGluttons, 'pure', (match, i) => (
      <Popup trigger={<button className='btn green'>{match}</button>} modal>
        {pureContent}
      </Popup>
    ));
    const replacedDisobedient = reactStringReplace(replacedPure, 'disobedient', (match, i) => (
      <Popup trigger={<button className='btn blue'>{match}</button>} modal>
        {disobedientContent}
      </Popup>
    ));
    const replacedQuarrels = reactStringReplace(replacedDisobedient, 'quarrels', (match, i) => (
      <Popup trigger={<button className='btn red'>{match}</button>} modal>
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

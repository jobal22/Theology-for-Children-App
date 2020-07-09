import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import {findChapter, findChaptersinBook} from '../helpers';
import reactStringReplace from 'react-string-replace';
import PopUp from '../PopUp/PopUp';

export default class Chapters extends Component {
  
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  static contextType = TCContext;

  render() {
    const { chapters=[] } = this.context;
    const props = this.props;
    const chapterId = props.id;
    const chapter = findChapter(chapters, chapterId) || {};
    const verses = props.verse;
    // const chaz = verse.map(v=> v.name + ' ' + v.content)
    // const chaz = verse.map(v=> <ol><li>{v.name}{' '}{v.content}</li></ol>)
    // const verse = verses.map(v=> <ol key={v.id}><li>{v.content}</li></ol>);
    // const verse = verses.filter(verses=>chapter.id === verses.chapterId)
    // const ver = verse.filter(v=>verse.chapterid === chapter.id).map(v=>v)
    const verse = verses.map(v=> v.content + ' ');
    const replacedText = reactStringReplace(verse, 'servant', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText1 = reactStringReplace(replacedText, 'apostle', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText2 = reactStringReplace(replacedText1, 'faith', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText3 = reactStringReplace(replacedText2, 'truth', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText4 = reactStringReplace(replacedText3, 'eternal life', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText5 = reactStringReplace(replacedText4, 'preaching', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText6 = reactStringReplace(replacedText5, 'Savior', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText7 = reactStringReplace(replacedText6, 'elders', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText8 = reactStringReplace(replacedText7, 'reproach', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText9 = reactStringReplace(replacedText8, 'one wife', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText10 = reactStringReplace(replacedText9, 'arrogant', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText11 = reactStringReplace(replacedText10, 'quick-tempered', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText12 = reactStringReplace(replacedText11, 'drunkard', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText13 = reactStringReplace(replacedText12, 'a lover of good', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText14 = reactStringReplace(replacedText13, 'self-controlled', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText15 = reactStringReplace(replacedText14, 'sound doctrine', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText16 = reactStringReplace(replacedText15, 'insubordinate', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText17 = reactStringReplace(replacedText16, 'empty talkers', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText18 = reactStringReplace(replacedText17, 'deceivers', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText19 = reactStringReplace(replacedText18, 'shameful gain', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText20 = reactStringReplace(replacedText19, 'gluttons', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText21 = reactStringReplace(replacedText20, 'pure', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText22 = reactStringReplace(replacedText21, 'disobedient', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));
    const replacedText23 = reactStringReplace(replacedText22, 'quarrels', (match, i) => (
      <button className="btn" onClick={this.togglePop}>{match}</button>
    ));

    return (
      <div>
        <header>
          <h3 key={chapter.id}>{chapter.name}</h3>
        </header>
        <section>
          {/* {verse.filter(v=>verse.chapterid === chapter.id).map(v=><p>{v.name}{' '}{v.content}</p>)} */}
          {/* {verse} */}
          <p>{replacedText23}</p>
          
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </section>
      </div>
    )
  }
}

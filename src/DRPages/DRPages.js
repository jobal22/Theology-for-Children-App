import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import StringReplace from '../DRPContent/DRPContent';
import Quiz from '../Quiz/Quiz';
import './DRPages.css';

export default class DRPages extends Component {

  state = {
    seen: false,
    plans: {
      verses: []
    }
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  static contextType = TCContext;

  render() {
    const {plans, verses, quiztitles, quizes} = this.context;
    const planId = this.props.match.params;
    const plan = plans.filter(m=> planId.planId == m.id)
    const pqt = plan.map(p => p.quiztitles)
    const planVerses = plan.map(h=> h.verses)
    function get1DArray(arr){
      var result = new Array();
      for (var x = 0; x < arr.length; x++){
          for (var y = 0; y < arr[x].length; y++){
          result.push(arr[x][y])
          }
      }
      return result
    }
    const planVerse = get1DArray(planVerses)
    const verse = planVerse.map(v=>verses[v])
    const quiztitle = quiztitles.filter(q => q.id == pqt)
    // const quiz = quizes.map(quiz => quiz.name)
    console.log('Where the Quiz?', quizes)
    return (
      <div className = 'DRP'>
        <header>
          {plan.map(r=>
            <h2 key={r.id}>{r.day}</h2>)}
        </header>
        <section className='sidebar'>
          {quiztitle.map(quiztitle =>
            <Quiz 
            key = {quiztitle.id}
            id = {quiztitle.id}
            name = {quiztitle.name}
            />
            )}
        </section>
        <main>
          {verse.map(verse=>
          <StringReplace 
            key={verse.id}
            id={verse.id}
            name={verse.name}
            content={verse.content}
            className='theText'
          />
          )}
        </main>

      </div>
    )
  }
}

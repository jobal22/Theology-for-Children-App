import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import {findPlan} from '../helpers';
import reactStringReplace from 'react-string-replace';
import PopUp from '../PopUp/PopUp';
import Verses from '../Verses/Verses';
import './DRPages.css'

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

  state = {

  }

  // componentDidMount () {
  //   let itemsToRender;
  //   if (items) {
  //     itemsToRender = items.map(item => {
  //       return <div key={item.id}>{item.title}</div>;
  //     });
  //   }
  
  // }

  render() {
    const {plans, verses} = this.context;
    const planId = this.props.match.params;
    const plan = plans.filter(m=> planId.planId == m.id)
    const planVerses = plan.map(h=> h.verses)
    //this function allowed me to map through planVerses 2DArray. I think it just makes them into one array
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



    console.log('now we are here', verse)
    return (
      <div>
        <section>
          {plan.day}
        </section>
        <section>
          {plan.map(r=>
            <h2 key={r.id}>{r.day}</h2>)}
        </section>
        <section>
          {verse.map(v=>
           <ol>
            <li>
              {v.name} {v.content}
            </li>
          </ol>
        
          )}
        </section>
      </div>
    )
  }
}

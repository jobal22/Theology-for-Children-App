import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import {findPlanTitle} from '../helpers';
import './DailyReadingPlan.css';

export default class DailyReadingPlan extends Component {
  static contextType = TCContext;
  render() {
    const { plantitles, plans } = this.context;
    const plantitleId = this.props.match.params.planTitleId;
    const planTitle = findPlanTitle (plantitles, plantitleId) || {}
    return (
      <div>
        <header >
          <h1>Daily Reading Plan</h1>
        </header>
        <section>
          <h3> {planTitle.name} </h3>
          {plans.map(p=>
          <ol key={p.id}>
            <li><Link to={`/readingplan/${p.id}`} key={p.id}>{p.day}</Link></li>
         </ol>)}
        </section>

      </div>
    )
  }
}

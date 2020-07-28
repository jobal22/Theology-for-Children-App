import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import {findPlanTitle} from '../helpers';
import './DailyReadingPlan.css';

export default class DailyReadingPlan extends Component {
  static contextType = TCContext;
  render() {
    const { plantitles, plans } = this.context;
    const plantitle = plantitles.map(p => p.name)
    return (
      <div className='DailyReadingPlan'>
        <header>
          <h1 className='DRT'>Daily Reading Plan</h1>
          <hr></hr>
        </header>
        <section>
          {plantitles.map(plantitle =>
            <h3 className='DRPlan'> {plantitle.name} </h3>
          )}
          {plans.map(p=>
          <p key={p.id}>
            <Link className='DRLink' to={`/readingplan/${p.id}`} key={p.id}>{p.day}</Link>
         </p>)}
        </section>
      </div>
    )
  }
}

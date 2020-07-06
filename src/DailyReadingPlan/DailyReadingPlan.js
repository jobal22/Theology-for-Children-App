import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DailyReadingPlan.css'

export default class DailyReadingPlan extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>Daily Reading Plan</h1>
        </section>
        <section>
          <h3> Titus </h3>
          <ol>
            <li><Link to={'/dailyreader/:dailyreaderId'}>Day 1</Link></li>
            <li><Link to={'/dailyreader/:dailyreaderId'}>Day 2</Link></li>
            <li><Link to={'/dailyreader/:dailyreaderId'}>Day 3</Link></li>
         </ol>
        </section>

      </div>
    )
  }
}

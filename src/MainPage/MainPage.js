import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        {/* <nav className="Landing__nav" >Nav</nav> */}
        <main>
          <header className="Header">
          <h1>Theology for Children</h1>
          </header>

          <section>
          <p><b>Theology for Children</b> provides interactive Bible reading and reading plans for young readers using the English Standard Version</p>          </section>

          <section>
            <Link to={'/read'}><h2>Read Titus</h2></Link>
            <p>"insert preview image"</p>
        </section>

        <section>
            <Link to={'/dailyreader'}><h2>Daily Read Plan</h2></Link>
            <p>"insert preview image"</p>
        </section>
        </main>
        {/* <footer className="Landing__footer"></footer> */}
      </div>
    )
  }
}

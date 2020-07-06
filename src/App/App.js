import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Read from '../Read/Read';
import DailyReadingPlan from '../DailyReadingPlan/DailyReadingPlan';
import DRPages from '../DRPages/DRPages';
import './App.css';

export default class App extends Component {
  state = {
    chapterOne: [],
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/read" component={Read}/>
        <Route exact path="/dailyreader" component={DailyReadingPlan}/>
        <Route exact path="/dailyreader/:dailyreaderId" component={DRPages}/>
        {/* <Route exact path = "/main" component={HomePage}/>
        <Route path = "/main/team/:teamId" component={Team}/>
        <Route path = "/main/category/:categoryId" component={Category}/>
        <Route path = "/main/address/:addressId" component={Address}/>
        <Route path = "/add-team" component={AddTeam}/>
        <Route path = "/add-category" component={AddCategory}/>
        <Route path = "/add-address" component={AddAddress}/> */}
      </>
    )
  }


  render() {
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link to={`/`}>Nav</Link>
        </nav>
        <main>
          <div className="App__link">
            <main className="App__main">{this.renderMainRoutes()}</main>
            {/* <Route exact path="/" component={LandingPage}/>
            <Route
              exact
              path = "/main"
              render = {routeProps => {
                return <HomePage {...routeProps} store={store}/>
              }}
            />
            <Route
              path = "/main/team/:teamId"
              render = {routeProps => {
                return <Team {...routeProps} store={store}/>
              }}
            />
            <Route
              path = "/main/category/:categoryId"
              render = {routeProps => {
                return <Category {...routeProps} store={store}/>
              }}
            />
            <Route
              path = "/main/address/:addressId"
              render = {routeProps => {
                return <Address {...routeProps} store={store}/>
              }}
            />
            <Route
              path = "/add-team"
              component={AddTeam}
            />
            <Route
              path = "/add-category"
              component={AddCategory}
            />
            <Route
              path = "/add-address"
              render = {routeProps => {
                return <AddAddress {...routeProps} store={store}/>
              }}
              // component={AddAddress}
            /> */}
            {/* <main className="App__main">{this.renderMainRoutes()}</main> */}
          </div>
          {/* <div>{this.renderMainRoutes()}</div> */}

        </main>
        <footer className="App__footer"></footer>
      </div>
    )
  }
}

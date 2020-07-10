import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TCContext from '../Context/TCContext'
import MainPage from '../MainPage/MainPage';
import Read from '../Read/Read';
import LandingPage from '../LandingPage/LandingPage.js';
import DailyReadingPlan from '../DailyReadingPlan/DailyReadingPlan';
import DRPages from '../DRPages/DRPages';
import config from '../config';
import LoadingSpinner from '../loadingSpinner/loadingSpinner.js'
import './App.css';

export default class App extends Component {
  state = {
    books: [],
    chapters: [],
    verses: [],
    plantitles: [],
    plans: [],
    contents: []
    }

  componentDidMount() {
    this.setState({loading: true}, () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/books`),
      fetch(`${config.API_ENDPOINT}/api/chapters`),
      fetch(`${config.API_ENDPOINT}/api/verses`),
      fetch(`${config.API_ENDPOINT}/api/plantitles`),
      fetch(`${config.API_ENDPOINT}/api/plans`),
      fetch(`${config.API_ENDPOINT}/api/contents`),

    ])
      .then(([ booksRes, chaptersRes, versesRes, plantitlesRes, plansRes, contentsRes ]) => {
        if (!booksRes.ok) return booksRes.json().then(e => Promise.reject(e))
        if (!chaptersRes.ok) return chaptersRes.json().then(e => Promise.reject(e))
        if (!versesRes.ok) return versesRes.json().then(e => Promise.reject(e))
        if (!plantitlesRes.ok) return plantitlesRes.json().then(e => Promise.reject(e))
        if (!plansRes.ok) return plansRes.json().then(e => Promise.reject(e))
        if (!contentsRes.ok) return contentsRes.json().then(e => Promise.reject(e))
        return Promise.all([booksRes.json(), chaptersRes.json(), versesRes.json(), plantitlesRes.json(), plansRes.json(), contentsRes.json()])
      })
      .then(([books, chapters, verses, plantitles, plans, contents]) => {
        this.setState({ loading: false, books, chapters, verses, plantitles, plans, contents })
      })
      .catch(error => {
        console.error({ error })
      })
    })
  }
      
  renderMainRoutes() {
    return (
      <>
        <Route exact path= "/" component={LandingPage}/>       
        <Route exact path= "/main" component={MainPage}/>
        <Route exact path= "/main/:bookId" component={Read}/>
        <Route exact path= "/dailyreader/:planTitleId" component={DailyReadingPlan}/>
        <Route exact path= "/readingplan/:planId" component={DRPages}/>
      </>
    )
  }

  render() {
    const contextValue = {
      books: this.state.books,
      chapters: this.state.chapters,
      verses: this.state.verses,
      plantitles: this.state.plantitles,
      plans: this.state.plans,
      contents: this.state.contents
      }
    const {loading}=this.state;
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link to={"/main"}>Nav</Link>
        </nav>
        <main>
          <div className="App__link">
            <TCContext.Provider value={contextValue}>
            <main className="App__main">{this.renderMainRoutes()}</main>
            </TCContext.Provider>
          </div>
          {loading ? <LoadingSpinner/> : <></>}
        </main>
        <footer className="App__footer"></footer>
      </div>
    )
  }
}

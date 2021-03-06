import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import MainPage from '../MainPageComponent/MainPage';
import Read from '../ReadComponent/Read';
import LandingPage from '../LandingPageComponent/LandingPage.js';
import DailyReadingPlan from '../DailyReadingPlanComponent/DailyReadingPlan';
import DRPages from '../DRPagesComponent/DRPages';
import config from '../config';
import LoadingSpinner from '../loadingSpinnerComponent/loadingSpinner.js';
import './App.css';

export default class App extends Component {
  state = {
    books: [],
    chapters: [],
    verses: [],
    plantitles: [],
    plans: [],
    contents: [],
    quiztitles: [],
    quizes: [],
    loading: true
    }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/books`),
      fetch(`${config.API_ENDPOINT}/api/chapters`),
      fetch(`${config.API_ENDPOINT}/api/verses`),
      fetch(`${config.API_ENDPOINT}/api/plantitles`),
      fetch(`${config.API_ENDPOINT}/api/plans`),
      fetch(`${config.API_ENDPOINT}/api/contents`),
      fetch(`${config.API_ENDPOINT}/api/quiztitles`),
      fetch(`${config.API_ENDPOINT}/api/quizes`),
    ])
      .then(([ booksRes, chaptersRes, versesRes, plantitlesRes, plansRes, contentsRes, quiztitlesRes, quizesRes ]) => {
        if (!booksRes.ok) return booksRes.json().then(e => Promise.reject(e))
        if (!chaptersRes.ok) return chaptersRes.json().then(e => Promise.reject(e))
        if (!versesRes.ok) return versesRes.json().then(e => Promise.reject(e))
        if (!plantitlesRes.ok) return plantitlesRes.json().then(e => Promise.reject(e))
        if (!plansRes.ok) return plansRes.json().then(e => Promise.reject(e))
        if (!contentsRes.ok) return contentsRes.json().then(e => Promise.reject(e))
        if (!quiztitlesRes.ok) return quiztitlesRes.json().then(e => Promise.reject(e))
        if (!quizesRes.ok) return quizesRes.json().then(e => Promise.reject(e))
        return Promise.all([booksRes.json(), chaptersRes.json(), versesRes.json(), plantitlesRes.json(), plansRes.json(), contentsRes.json(), quiztitlesRes.json(), quizesRes.json()])
      })
      .then(([books, chapters, verses, plantitles, plans, contents, quiztitles, quizes]) => {
        this.setState({ loading: false, books, chapters, verses, plantitles, plans, contents, quiztitles, quizes })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  updateQuiz = updateQuiz => {
    this.setState({
      quizes: this.state.quizes.map(quiz =>
        (quiz.id !== updateQuiz.id) ? quiz : updateQuiz)
    })
  }
      
  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path= "/" component={LandingPage}/>  
        <Route exact path= "/main" component={MainPage}/>
        <Route exact path= "/main/:bookId" component={Read}/>
        <Route exact path= "/dailyreader/:planTitleId" component={DailyReadingPlan}/>
        <Route exact path= "/readingplan/:planId" component={DRPages}/>
      </Switch>
    )
  }

  render() {
    const contextValue = {
      books: this.state.books,
      chapters: this.state.chapters,
      verses: this.state.verses,
      plantitles: this.state.plantitles,
      plans: this.state.plans,
      contents: this.state.contents,
      quiztitles: this.state.quiztitles,
      quizes: this.state.quizes,
      updateQuiz: this.updateQuiz
      }
    const {loading}=this.state;
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link className="navLink" to={"/main"}>
            <h1 className='logo' >Theology for Children</h1>
          </Link>
        </nav>
        <main>
          <div className="App__link">
            <TCContext.Provider value={contextValue}>
            <main className="App__main">{this.renderMainRoutes()}</main>
            </TCContext.Provider>
          </div>
          {loading ? <LoadingSpinner/> : <></>}
        </main>
        <footer className="App__footer">Read • Learn • Grow</footer>
      </div>
    )
  }
}

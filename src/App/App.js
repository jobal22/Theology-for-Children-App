import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TCContext from '../Context/TCContext'
import MainPage from '../MainPage/MainPage';
import Read from '../Read/Read';
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
    }

  componentDidMount() {
    this.setState({loading: true}, () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/books`),
      fetch(`${config.API_ENDPOINT}/api/chapters`),
      fetch(`${config.API_ENDPOINT}/api/verses`),
    ])
      .then(([ booksRes, chaptersRes, versesRes ]) => {
        if (!booksRes.ok) return booksRes.json().then(e => Promise.reject(e))
        if (!chaptersRes.ok) return chaptersRes.json().then(e => Promise.reject(e))
        if (!versesRes.ok) return versesRes.json().then(e => Promise.reject(e))
        return Promise.all([booksRes.json(), chaptersRes.json(), versesRes.json()])
      })
      .then(([books, chapters, verses]) => {
        this.setState({ loading: false, books, chapters, verses })
        console.log('fetch call', books, chapters, verses )
      })
      .catch(error => {
        console.error({ error })
      })
    })
  }
      
  


  renderMainRoutes() {
    return (
      <>
        <Route exact path= "/" component={MainPage}/>
        <Route exact path= "/:bookId" component={Read}/>
        <Route exact path= "/dailyreader" component={DailyReadingPlan}/>
        <Route exact path= "/dailyreader/:dailyreaderId" component={DRPages}/>
      </>
    )
  }


  render() {
    const contextValue = {
      books: this.state.books,
      chapters: this.state.chapters,
      verses: this.state.verses,
      }
    const {loading}=this.state;
    console.log('dont now', this.state.chapters, this.state.books)
    return (
      <div className="App">
        <nav className="App__nav" >
          <Link to={"/"}>Nav</Link>
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

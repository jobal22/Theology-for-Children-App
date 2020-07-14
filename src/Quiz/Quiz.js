import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TCContext from '../Context/TCContext';
import PropTypes from 'prop-types';
import {findQuiz} from '../helpers';
import Swal from 'sweetalert2';
import Popup from "reactjs-popup";
import config from '../config';
import './Quiz.css';

const Required = () => (
  <span className='AddressSubmit__required'>*</span>
)

export default class Quiz extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = TCContext;

  state = {
    error: null,
    id: '',
    answer: ''
  };

  handleChangeAnswer = e => {
    this.setState({ answer: e.target.value })
  };

  handleSubmit = (e, qu) => {
    e.preventDefault()
    const {quizes=[]} = this.context;
    const quiztitle = this.props;
    const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id)
    const quizId = quiz.map(q=> q.id)
    const { quizID } = quizId
    const { answer } = this.state
    const newQuiz = {answer}
    fetch(config.API_ENDPOINT + `/api/quiz/${quizID}`, {
      method: 'PATCH',
      body: JSON.stringify(newQuiz),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        return res.ok
      })
      .then(() => {
        console.log('JOBAL', this.props)
        this.context.updateQuiz(newQuiz)
        Swal.fire('Congrats!', 'Quiz updated', 'success')
        .then(() => {
          this.props.history.push('/main/admin')
        })
      })
      .catch(error => {
        Swal.fire('Oops!', 'Quiz failed', 'error')
        console.error(error)
        this.setState({ error })
      })
  }

  render() {
    const {quizes=[]} = this.context;
    const quiztitle = this.props;
    // const quiztitleId = quiztitle.id;
    // const quiz = findQuiz(quizes, quiztitleId) || {content: ''}
    const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id)
    const ans = quiz.map(p => p.options)
    const quizId = quiz.map(q=> q.id)
    console.log('NOW LOOK', ans)
    return (
      <div className='Quiz'>
        <header>
          <h2>Comprehension Quiz</h2>
          <hr></hr>
          <h2>{quiztitle.name}</h2>
        </header>
        <main>
          {quiz.map(q =>
          <ul>
            <li>
              <Link to={`/quiz/${q.id}`}>{q.qname}{' '}{q.content}</Link>
            </li>
          </ul>
          )}
        </main>
      </div>
    )
  }
}

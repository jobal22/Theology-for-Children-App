import React, { Component , useState} from 'react';
import { Link, Switch } from 'react-router-dom';
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
    // answer: '',
    questionId: null,
    userAnswer: null,
    currentQuestion: 0,
    answers: [],
    quizEnd: false,
    score: 0,
    disabled: true
  };

  loadQuiz =  () => {
    const {currentQuestion} = this.state
    const {quizes} = this.context
    const quiztitle = this.props;
    const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id);
    this.setState (() => {
      return {
        questions: quiz[currentQuestion].question,
        answers: quiz[currentQuestion].answers,
        correctanswer: quiz[currentQuestion].correctanswer
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  };

    nextQuestionHandler = () => {
      const {userAnswer, correctanswer, score} = this.state
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
      // console.log(this.state.currentQuestion)
      //increment the score is answer is correct
      if(userAnswer === correctanswer) {
        this.setState({
          score: score + 1
        })
      }
    }
    //updates the component
    componentDidUpdate(prevProps, prevState) {
      const {currentQuestion} = this.state;
      const {quizes} = this.context;
      const quiztitle = this.props;
      const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id);
      if(this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => {
          return {
            disabled: true,
            questions: quiz[currentQuestion].question,
            answers: quiz[currentQuestion].answers,
            correctanswer: quiz[currentQuestion].correctanswer
          };
        })
      }
    }

    checkAnswer = answer => {
      this.setState({
        userAnswer: answer,
        disabled: false
      })
    }
    finishHandler = () => {
      const {quizes} = this.context;
      const quiztitle = this.props;
      const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id);
      if(this.state.currentQuestion === quiz.length - 1) {
        this.setState({
          quizEnd: true
        })
      }
    }




  handleChangeUserAnswer = e => {
    console.log(e.target.id, 'useranswer')
    this.setState({ useranswer: e.target.value })
  };

  handleSubmit = (e, quiz) => {
    e.preventDefault()
    const {quizes=[]} = this.context;
    const quiztitle = this.props;
    const qu = quizes.filter(quiz => quiz.qtconnect === quiztitle.id)
    const quizId = qu.map(q=> q.id)
    const { useranswer } = this.state
    const newQuiz = {useranswer}
    console.log('does this work', qu)
    fetch(config.API_ENDPOINT + `/api/quiz/${quizId}`, {
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
        // .then(() => {
        //   this.props.history.push('/main/admin')
        // })
      })
      .catch(error => {
        Swal.fire('Oops!', 'Quiz failed', 'error')
        console.error(error)
        this.setState({ error })
      })
  }

  render() {
    const {quizes=[]} = this.context;
    const {questionId} = this.state
    const quiztitle = this.props;
    // const quiztitleId = quiztitle.id;
    // const quiz = findQuiz(quizes, quiztitleId) || {content: ''}
    const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id)
    let ans;
    if (questionId){
      ans = quizes.find(quiz => quiz.id === questionId).answers
    }
    const quizId = quiz.map(q=> q.id)
    const { quizID } = quizId
        console.log('hihihi', ans)

    // console.log('NOW LOOK', quizId)
    const {questions, answers, currentQuestion, userAnswer, quizEnd} = this.state
    // console.log('hihihi', this.state)
    
      if(quizEnd) {
        return (
          <div>
            <h2>Game Over</h2>
            <h3>Final score is {this.state.score} points</h3>
            <p> The correct Answer's for the Questions were: </p>
            <ul>
              {quiz.map((item, index) => (
                <li className='correctanswer'
                  key={index}
                >
                  {item.qname}{' '}{item.correctanswer}
                </li>
              ))}
            </ul>
            <p>Here is your answers: {userAnswer}</p>
          </div>
        )
      }
    return (
      <div className='Quiz'>
        <header>
          <h2>Comprehension Quiz</h2>
          <hr></hr>
          <h2>{quiztitle.name}</h2>
        </header>
        <main>
          <form onSubmit={(e) => this.handleSubmit(e,quiz)}>
          <h3 >{questions}</h3>
          <span> {`Quetions ${currentQuestion + 1} out of ${quiz.length - 0}`}</span>
            {answers.map(answer => 
              <p key={answer.id}
                className={` answers ${userAnswer === answer ? "selected" : null}`}
                onClick={() => this.checkAnswer(answer)}
                onChange={this.handleChangeUserAnswer}
              >
                {answer}
              </p>
            )}{currentQuestion < quiz.length -1 &&
            <button 
              disabled={this.state.disabled}
              className='moveBtn'
              onClick={this.nextQuestionHandler}
            >Next</button>
            }
            {currentQuestion === quiz.length - 1 && 
              <button
                disabled={this.state.disabled}
                className='moveBtn'
                onClick={this.finishHandler}
              >Finish</button>
            }
</form>
        </main>
        {/* <section>
          {quiz.map(q=>
          <div>
            <p>{q.qname}{q.question}</p>
            <p>Answer Choices: {q.answers}</p>
            <p>Correct Answer: {q.correctanswer}</p>
            <p>Your Answer: {q.useranswer}</p></div>)}
        </section> */}
      </div>
    )
  }
}

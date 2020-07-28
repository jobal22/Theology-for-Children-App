import React, { Component } from 'react';
import TCContext from '../Context/TCContext';
import './Quiz.css';

export default class Quiz extends Component {

  static contextType = TCContext;

  state = {
    error: null,
    id: '',
    questionId: null,
    useranswer: null,
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
        questionId: quiz[currentQuestion].id,
        questionnumber: quiz[currentQuestion].qname,
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
      const {useranswer, correctanswer, score} = this.state
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
      if(useranswer === correctanswer) {
        this.setState({
          score: score + 1
        })
      }
    }
    componentDidUpdate(prevProps, prevState) {
      const {currentQuestion} = this.state;
      const {quizes} = this.context;
      const quiztitle = this.props;
      const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id);
      if(this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => {
          return {
            disabled: true,
            questionId: quiz[currentQuestion].id,
            questionnumber: quiz[currentQuestion].qname,
            questions: quiz[currentQuestion].question,
            answers: quiz[currentQuestion].answers,
            correctanswer: quiz[currentQuestion].correctanswer
          };
        })
      }
    }

    checkAnswer = answer => {
      this.setState({
        useranswer: answer,
        disabled: false
      })
    }
    finishHandler = () => {
      const {useranswer, correctanswer, score} = this.state
      const {quizes} = this.context;
      const quiztitle = this.props;
      const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id);
      if(useranswer === correctanswer) {
        this.setState({
          score: score + 1
        })
      }
      if(this.state.currentQuestion === quiz.length - 1) {
        this.setState({
          quizEnd: true
        })
      }
    }

  render() {
    const {quizes=[]} = this.context;
    const quiztitle = this.props;
    const quiz = quizes.filter(quiz => quiz.qtconnect === quiztitle.id)
    const {questionnumber, questions, answers, currentQuestion, useranswer, quizEnd} = this.state
    
      if(quizEnd) {
        return (
          <div className='Quiz'>
            <header>
              <h2>Game Over</h2>
              <hr></hr>
            </header>
            <main>
              <h3 className='questiontitle'>Final score is {this.state.score} points</h3>
              <span> The correct answer's were: </span>
                {quiz.map((item, index) => (
                  <p className='answersEnd' key={index}>
                    {item.qname}{' '}{item.correctanswer}
                  </p>
                ))}
            </main>
          </div>
        )
      }
    return (
      <div className='Quiz'>
        <header>
          <h2 className='questionheader'>{quiztitle.name}</h2>
          <hr></hr>
        </header>
        <main>
          <h3 className='questiontitle'>{questionnumber}{' '}{questions}</h3>
          <span> {`Quetions ${currentQuestion + 1} out of ${quiz.length - 0}`}</span>
            {answers.map(answer => 
              <p key={answer.id}
                className={` answers ${useranswer === answer ? "selected" : null}`}
                onClick={() => this.checkAnswer(answer)}
              >
                {answer}
              </p>
            )}{currentQuestion < quiz.length -1 &&
            <form className='form'><button 
              disabled={this.state.disabled}
              className='moveBtn'
              onClick={this.nextQuestionHandler}
            >Next</button></form>
            }
            {currentQuestion === quiz.length - 1 && 
              <button
                disabled={this.state.disabled}
                className='moveBtn'
                onClick={this.finishHandler}
              >Finish</button>
            }
        </main>
      </div>
    )
  }
}

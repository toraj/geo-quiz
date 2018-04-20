import React, { Component } from 'react'
import questions from "../resources/questions.json";
import * as _ from "lodash";
import { connect } from "react-redux";
import {setGameQuestions} from "../actions/currentGameActions";
import {currentQuestionSelector} from "../reducers/currentGameReducer";

export class Question extends Component {

  componentDidMount() {
    const shuffledQuestions = _.shuffle(questions);
    const tenFirst = shuffledQuestions.slice(0, 10);
    this.props.setGameQuestions(tenFirst);
  }

  render() {
    return (
      <div className='question'>
        <h1>Question {this.props.currentQuestion && this.props.currentQuestion.question}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: currentQuestionSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  setGameQuestions: (questions) => {
      dispatch(setGameQuestions(questions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
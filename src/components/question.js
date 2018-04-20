import React, { Component } from 'react'
import questions from "../resources/questions.json";
import * as _ from "lodash";
import { connect } from "react-redux";
import {setGameQuestions} from "../actions/currentGameActions";

export class Question extends Component {

  componentDidMount() {
    const shuffledQuestions = _.shuffle(questions);
    const tenFirst = shuffledQuestions.slice(0, 10);
    this.props.setGameQuestions(tenFirst);
  }

  render() {
    return (
      <div className='question'>
        <h1>Question {this.props.question}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setGameQuestions: (questions) => {
      dispatch(setGameQuestions(questions));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
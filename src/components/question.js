import React, { Component } from 'react'

export default class Question extends Component {

  render() {
    return (
      <div className='question'>
        <h1>Question {this.props.question}</h1>
      </div>
    )
  }
}
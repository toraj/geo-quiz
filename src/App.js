import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Map from './components/map'
import Question from "./components/question";
// import questions from "./resources/questions.json";
import * as _ from "lodash";

class App extends Component {

    componentDidMount() {
        const q = [{
                question: "What is the capital of New Zealand?",
                answer: "Wellington",
            },
            {
                question: "Christiana is the former name of which European city?",
                answer: "Oslo",
            },
            {
                question: "Dushanbe is the capital of which Central Asian republic?",
                answer: "Tajikistan",
            }];
        const shuffledQuestions = _.shuffle(q);
        debugger;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Question question={"foo bar?"} />
                </header>
                <Map />
            </div>
        );
    }
}

export default App;

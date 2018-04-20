import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Map from './components/map'
import Question from "./components/question";

class App extends Component {

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

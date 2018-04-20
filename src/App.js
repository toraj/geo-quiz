import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Map from './components/map'
import MainNavigation from './components/MainNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigation></MainNavigation>
        <Map/>
      </div>
    );
  }
}

export default App;

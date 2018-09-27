import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CountDownTimer from './CountDownTimer';
import ListContainer from './StringList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountDownTimer clicks = { 10 } />
        <ListContainer list = {
          [
          "Sita",
          "Geeta",
          "Reeta"
          ]
        } /> 
      </div>
    );
  }
}

export default App;

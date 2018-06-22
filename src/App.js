import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Board  />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import {Impression} from './components/impression/Impression';

class App extends Component {
  render() {
    return (
      <div class="app">
        <Header />
        <Impression />
      </div>
    );
  }
}

export default App;

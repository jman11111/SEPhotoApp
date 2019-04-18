import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tagform from './components/Tagform'
import Candycard from './components/Candycard'

class App extends Component {

  render() {
    return (
      <Tagform/>,
      <Candycard/>
    )
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Linklist from './components/Linklist';

class App extends Component {
  render() {
    return(
      <form>
      <Search />
      <Linklist />
      </form>
    );
  }
}

export default App;

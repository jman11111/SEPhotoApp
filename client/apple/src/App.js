import React, { Component } from 'react';
import './App.css';
import Tagform from './components/Tagform'
import Search from "./components/Search";
import NavBar from "./components/navbar";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Search />
        <Tagform/>
      </React.Fragment>
    );
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tagform from './components/Tagform'
import Candycard from './components/Candycard'

class App extends Component {

  render() {
    return (
        <Candycard name={"Candy"} imageurl={"https://pics.drugstore.com/prodimg/597179/900.jpg"} buyurl={"https://www.google.com"}/>
    )
  }
}


export default App;

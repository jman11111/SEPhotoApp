import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tagform from './components/Tagform'
import Candycard from './components/Candycard'

class App extends Component {

  render() {
    return (
        <Candycard name={"Sour Patch Kids Strawberry"} imageurl={"https://pics.drugstore.com/prodimg/597179/900.jpg"} buyurl={"//" + "www.google.com"}/>

  )
  }
}


export default App;

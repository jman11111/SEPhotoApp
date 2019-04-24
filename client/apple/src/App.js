import React, { Component } from 'react';
import './App.css';
import Tagform from './components/Tagform'
import Search from "./components/Search";
import NavBar from "./components/navbar";

class App extends Component {

  render() {
    return (

      <React.Fragment >
          <body className={"CSSBackground"}/>
            <div className={"CSSNavBar"}>
                <NavBar />
            </div>
            <div className={"CSSSearch"}>
                <Search />
            </div>
            <div className={"CSSTagform"}>
                <Tagform/>
            </div>

      </React.Fragment>

    );
  }
}


export default App;

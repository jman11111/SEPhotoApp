import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
      </React.Fragment>
    );
  }
}

export default App;

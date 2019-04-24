import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <body>
          <Login />
        </body>
        <body>
          <Signup />
        </body>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

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

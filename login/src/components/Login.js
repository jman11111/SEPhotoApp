import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>SWEETS</h1>
        <label> Username </label>
        <br />
        <input placeholder="Enter username here" />
        <br />
        <label> Password </label>
        <br />
        <input placeholder="Enter password here" />
        <br />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import Homescreen from "../resources/images/home.png";
//import "./node_modules/bootstrap/js/src/button";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = () => {
    this.setState({
      username: this.username.value,
      password: this.password.vaule
    });
  };

  render() {
    var sectionStyle = {
      width: "100%",
      height: "1280px",
      backgroundImage: "url(" + Homescreen + ")"
    };

    return (
      <div>
        <section style={sectionStyle} />
        <h1 style={{ color: "blue" }}> SWEETS</h1>
        <label style={{ color: "blue" }}> Username </label>
        <br />
        <input
          placeholder="Enter username here"
          ref={input => (this.username = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "blue" }}> Password </label>
        <br />
        <input
          placeholder="Enter password here"
          ref={input => (this.password = input)}
          onChange={this.handleInputChange}
        />
        <button variant="outline-secondary">GO</button>
        <br />
        <b style={{ color: "blue" }}>OR</b>
        <br />
        <button variant="outline-primary">Sign Up</button>
      </div>
    );
  }
}

export default Login;

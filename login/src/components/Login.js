import React, { Component } from "react";
import Signup from "./Signup";
import Homescreen from "../resources/images/home.png";
import Button from "react-bootstrap/Button";

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
        <h1 style={{ color: "rgb(201,124,242)" }}> SWEETS</h1>
        <label style={{ color: "rgb(201,124,242)" }}> Username </label>
        <br />
        <input
          placeholder="Enter username here"
          ref={input => (this.username = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "rgb(201,124,242)" }}> Password </label>
        <br />
        <input
          placeholder="Enter password here"
          ref={input => (this.password = input)}
          onChange={this.handleInputChange}
        />
        <Button
          type="button"
          class="btn btn-primary btn-md"
          onClick=""
          style={{ color: "rgb(201,124,242)" }}
        >
          GO
        </Button>
        <br />
        <b style={{ color: "rgb(201,124,242)" }}>OR</b>
        <br />
        <Button
          type="button"
          class="btn btn-primary btn-md"
          style={{ color: "rgb(201,124,242)" }}
        >
          Sign Up
        </Button>
      </div>
    );
  }
}

export default Login;

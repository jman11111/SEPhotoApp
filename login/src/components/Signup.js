import React, { Component } from "react";
import SignupPage from "../resources/images/sweetssignuppage.png";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  };

  handleInputChange = () => {
    this.setState({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      username: this.username.value,
      password: this.password.value
    });
  };

  render() {
    var sectionStyle = {
      width: "100%",
      height: "1000px",
      backgroundImage: "url(" + SignupPage + ")"
    };

    return (
      <div>
        <section style={sectionStyle} />
        <label style={{ color: "rgb(242,161,164" }}> First Name </label>
        <input
          ref={input => (this.firstName = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "rgb(242,161,164" }}> Last Name </label>
        <input
          ref={input => (this.lastName = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "rgb(242,161,164" }}> Email </label>
        <input
          ref={input => (this.email = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "rgb(242,161,164" }}> Username </label>
        <input
          ref={input => (this.username = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label style={{ color: "rgb(242,161,164" }}> Password </label>
        <input
          ref={input => (this.password = input)}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          class="btn btn-warning btn-lg"
          style={{ color: "rgb(255,238,168)" }}
        >
          Sign Up!
        </button>
      </div>
    );
  }
}

export default Signup;

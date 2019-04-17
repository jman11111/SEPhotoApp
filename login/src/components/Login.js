import React, { Component } from "react";
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
    return (
      <div>
        <h1>SWEETS</h1>
        <label> Username </label>
        <br />
        <input
          placeholder="Enter username here"
          ref={input => (this.username = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label> Password </label>
        <br />
        <input
          placeholder="Enter password here"
          ref={input => (this.password = input)}
          onChange={this.handleInputChange}
        />
        <Button variant="outline-secondary">GO</Button>
        <br />
        <b>OR</b>
        <br />
        <Button variant="outline-primary">Sign Up</Button>
      </div>
    );
  }
}

export default Login;

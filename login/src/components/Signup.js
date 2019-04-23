import React, { Component } from "react";
import SignupPage from "../resources/images/sweetssignuppage.png";

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
        <label> First Name </label>
        <input
          ref={input => (this.firstName = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label> Last Name </label>
        <input
          ref={input => (this.lastName = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label> Email </label>
        <input
          ref={input => (this.email = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label> Username </label>
        <input
          ref={input => (this.username = input)}
          onChange={this.handleInputChange}
        />
        <br />
        <label> Password </label>
        <input
          ref={input => (this.password = input)}
          onChange={this.handleInputChange}
        />
        <button> Sign Up! </button>
      </div>
    );
  }
}

export default Signup;

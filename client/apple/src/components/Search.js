import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <button className="btn btn-danger btn-sm">GO!</button>
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;

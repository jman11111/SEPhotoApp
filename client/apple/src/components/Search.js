import React, { Component } from "react";
import Button from "./button";
import LinkListSearch from './LinklistSearch';

class Search extends Component {
  state = {
    query: "",
    subval: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    console.log("HEHE")
  };

  handleSubmit = () => {
    this.setState({subval: this.search.value})
    console.log("HAHA")
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Button onclik={this.handleSubmit}/>
        <LinkListSearch FEED_QUERY={this.state.query}/>
      </form>
    );
  }
}

export default Search;

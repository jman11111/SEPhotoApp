import React, { Component } from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Linklist from './Linklist';

class Tagform extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 'Chocolate',
          Query: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.setState({Query: this.state.value})
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite tag:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Chalky">Chalky</option>
              <option value="Chocolate">Chocolate</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <Linklist FEED_QUERY={this.state.Query}/>
        </form>
      );
    }
  }

  export default Tagform;
  
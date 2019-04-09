import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.url}
        </div>
      </div>
    )
  }
}

export default Link
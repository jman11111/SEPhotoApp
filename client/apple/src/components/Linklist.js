import React, { Component } from 'react'
import Link from './Links'

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        url: 'https://www.prismagraphql.com',
      },
      {
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <div>{linksToRender.map(link => <Link url={link.url} />)}</div>
    )
  }
}

export default LinkList
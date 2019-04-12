import React, { Component } from 'react'
import Link from './Links'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    findCandy(cname: "Pez"){
        Candy{
            links
        }
    }
  }
`

class LinkList extends Component {
  render() {
    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>
    
            const linksToRender = data.Candy

            return (
                <div>
                    {linksToRender.map(link => <Link url={link.links[0]} />)}
                </div>
            )
            }}
        </Query>
    )
  }
}

export default LinkList
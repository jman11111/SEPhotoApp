import React, { Component } from 'react'
import Link from './Links'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function Linklist(props) {
  const FEED_QUERY = props.FEED_QUERY;
  const ACTUAL_QUERY = gql`
  {
    findCandybyTag(tag: "${FEED_QUERY}"){
      name
    }
  }
`
  return (
    <Query query={ACTUAL_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

        const namesToRender = data.findCandybyTag
        console.log(namesToRender);

        return (
            <div>
                {namesToRender.map(link => <Link url={link.name} />)}
            </div>
        )
        }}
    </Query>
)
}

export default Linklist
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Candycard from './Candycard'

function Linklist(props) {
  const FEED_QUERY = props.FEED_QUERY;
  const ACTUAL_QUERY = gql`
  {
    findCandybyTag(tag: "${FEED_QUERY}"){
      name
      tags
      links
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
                {namesToRender.map(link => <Candycard name={link.name} imageurl={"https://i.imgur.com/JcUo7Hb.jpg"} buyurl={`${link.links[0]}`}/>)}
            </div>
        )
        }}
    </Query>
)
}

export default Linklist
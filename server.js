const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
var { buildSchema } = require('graphql');
var { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');
const app = express()
const port = 3000
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).catch((err)=>{
  console.log(err);
});

// A map of functions which return data for the schema.
const resolvers = require('./src/resolvers');
console.log(resolvers);
app.get('/', (req, res) => res.send('Hello World!'));
 
const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
var { graphqlHTTP } = require('express-graphql');
var schema = require('./schema')
var root = require('./root')

var graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
})

module.exports = graphql
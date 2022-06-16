var express = require('express');
var graphql = require('./graphql/gql')
require('dotenv').config()
var app = express();

app.use('/graphql', graphql);

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require('./database/index')
const cors = require("cors")

const app = express();

// allow CORS
app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema, // schema: schema - as both names are the same
  graphiql: true,
}));

app.listen(4000, ()=> {
  console.log("Listening for requests on port 4000")
});
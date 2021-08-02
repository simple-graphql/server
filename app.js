const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mysql = require("mysql")
require("dotenv").config()

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to DB: " + err.stack);
    return;
  }
  console.log("connected successfully to DB (ID: " + connection.threadId + ")");
})

app.use("/graphql", graphqlHTTP({
  schema, // schema: schema - as both names are the same
  graphiql: true,
}));

app.listen(4000, ()=> {
  console.log("Listening for requests on port 4000")
});
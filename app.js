const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { Sequelize } = require('sequelize');
require("dotenv").config()

const app = express();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

try {
  sequelize.authenticate().then(() => {
    console.log("DB Connection Established Successfully");
  });
} catch (error) {
  console.error("Unable to connect to database", error);
}

app.use("/graphql", graphqlHTTP({
  schema, // schema: schema - as both names are the same
  graphiql: true,
}));

app.listen(4000, ()=> {
  console.log("Listening for requests on port 4000")
});
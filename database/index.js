const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

const models = {
  "author": require("../models/author"),
  "book": require("../models/book"),
}

// We define all models according to their files.
for (const [key, value] of Object.entries(models)) {
  module.exports[key] = value(sequelize, DataTypes);
}

module.exports.databaseConnection = sequelize
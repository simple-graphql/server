const {Sequelize, DataTypes, Model} = require('sequelize');
const Author = require("./author");

class Book extends Model {}

module.exports = (sequelize) => {
  Book.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'books',
  })
  console.log("BOOKS", Book === sequelize.models.books); // true
};
const { Sequelize, DataTypes, Model } = require('sequelize');

class Author extends Model{}

module.exports = (sequelize) => {
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'authors',
  })
  console.log("AUTHORS", Author === sequelize.models.authors); // true
};
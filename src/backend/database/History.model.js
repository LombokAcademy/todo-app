const { DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

const History = sequelize.define("History", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique:true
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = History;

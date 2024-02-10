const { DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Task;

const { DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.UUID, allowNull: false, primaryKey: true,defaultValue: DataTypes.UUIDV4,unique: true, },
  name: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Task;

// user.model.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection.js"); 

const User = sequelize.define("User", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

async function createTable() {
  try {
    await sequelize.sync({ force: true });
    console.log("Table User has been created!");
  } catch (err) {
    console.error("Failed to create table:", err);
  }
}

createTable();

module.exports = User;

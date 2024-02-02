const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3307,
  username: "todo",
  password: "todo",
  database: "todo",
});

module.exports = sequelize;

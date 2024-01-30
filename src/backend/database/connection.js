const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3307,
  username: "todo",
  password: "todo",
  database: "todo",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection successfully.");
  } catch (error) {
    console.error("Connection failed : ", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();

module.exports = sequelize;

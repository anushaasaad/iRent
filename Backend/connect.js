const mysql = require("mysql");
// Add the credentials to access your database
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Asalaar1234+",
  database: "irent",
  port: 3306,
  charset: "utf8mb4"
});
module.exports = mysqlConnection;
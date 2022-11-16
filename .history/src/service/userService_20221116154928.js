import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "decentralization",
});

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt); //hash password
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashPassword(password);
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username],
    function (err, results) {}
  );
};

const getUserList = () => {
  let users = [];
  connection.query("SELECT * FROM users", function (err, results) {
    console.log("🚀 ~ file: userService.js ~ line 28 ~ results", results);
  });
};

module.exports = {
  createNewUser,
  getUserList,
};

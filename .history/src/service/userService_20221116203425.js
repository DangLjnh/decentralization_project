import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
const salt = bcrypt.genSaltSync(10);

// get the promise implementation, we will use bluebird
// const bluebird = require('bluebird');

// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "decentralization",
  Promise: bluebird,
});

// query database
const [rows, fields] = await connection.execute(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Morty", 14]
);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt); //hash password
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashPassword(password);
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username],
    function (err, results) {
      if (err) console.log(err);
    }
  );
};

const getUserList = () => {
  let users = [];
  connection.query("SELECT * FROM users", function (err, results) {
    if (err) {
      console.log(err);
      return users;
    }
    users = results;
    return users;
  });
  return;
};

module.exports = {
  createNewUser,
  getUserList,
};

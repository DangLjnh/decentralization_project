import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
const salt = bcrypt.genSaltSync(10);

// create the connection, specify bluebird as Promise

// query database

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

const getUserList = async () => {
  let users = [];
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "decentralization",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  console.log("🚀 ~ file: userService.js ~ line 35 ~ getUserList ~ rows", rows);
  // connection.query("SELECT * FROM users", function (err, results) {
  //   if (err) {
  //     console.log(err);
  //     return users;
  //   }
  //   users = results;
  //   return users;
  // });
  // return;
};

module.exports = {
  createNewUser,
  getUserList,
};

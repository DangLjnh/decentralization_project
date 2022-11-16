import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird"; // use for promise
const salt = bcrypt.genSaltSync(10);

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
    function (err, results) {
      if (err) console.log(err);
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "decentralization",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  return rows;
};

module.exports = {
  createNewUser,
  getUserList,
};

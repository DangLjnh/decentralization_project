import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird"; // use for promise
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt); //hash password
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "decentralization",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username]
  );
  return rows;
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

const getUserItem = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "decentralization",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    `SELECT * FROM users WHERE ID = ?`,
    [id]
  );
  return rows;
};

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "decentralization",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    `DELETE FROM users WHERE ID = ?`,
    [id]
  );
  return rows;
};

const updateUser = async (id) => {};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserItem,
};

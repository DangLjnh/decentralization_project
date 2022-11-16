import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "decentralization",
});

import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

const handleHello = (req, res) => {
  const name = "Linh";
  return res.render("home.ejs", { name });
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

// "INSERT INTO users SET ? ", data
const handleCreateNewUser = (req, res) => {
  const { email, password, username } = req.body;
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    function (err, results) {}
  );
  return res.send("Hello create");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};
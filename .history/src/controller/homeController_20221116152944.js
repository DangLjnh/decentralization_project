import mysql from "mysql2";
import bcrypt from "bcryptjs";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "decentralization",
});

var salt = bcrypt.genSaltSync(10);

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
  const hashPassword = bcrypt.hashSync(password, salt); //hash password
  const checkPassword
    // connection.query(
  //   "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
  //   [email, hashPassword, username],
  //   function (err, results) {}
  // );
  return res.send("Hello create");
};;

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};

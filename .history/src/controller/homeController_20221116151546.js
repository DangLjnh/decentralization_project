import mysql from "mysql2";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "decentralization",
});

const handleHello = (req, res) => {
  const name = "Linh";
  return res.render("home.ejs", { name });
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO users SET ? ", data, function (err, results) {
    console.log(
      "🚀 ~ file: homeController.js ~ line 24 ~ handleCreateNewUser ~ results",
      results
    );
  });
  return res.send("Hello create");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};

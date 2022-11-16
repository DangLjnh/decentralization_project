import { createNewUser } from "../service/userService";

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
  return res.send("Hello create");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};

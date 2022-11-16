import { createNewUser, getUserList } from "../service/userService";

const handleHello = (req, res) => {
  const name = "Linh";
  return res.render("home.ejs", { name });
};

const handleUserPage = async (req, res) => {
  //model -> get data from database
  const userList = await getUserList();
  return res.render("user.ejs", { userList });
};

// "INSERT INTO users SET ? ", data
const handleCreateNewUser = (req, res) => {
  const { email, password, username } = req.body;
  // createNewUser(email, password, username);
  return res.send("Hello create");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};

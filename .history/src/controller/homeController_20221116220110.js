import { createNewUser, getUserList, deleteUser } from "../service/userService";

const handleHello = (req, res) => {
  const name = "Linh";
  const arr = [999, 100, 546, 1011, 2022];
  return res.render("home.ejs", { name });
};

const handleUserPage = async (req, res) => {
  //model -> get data from database
  const userList = await getUserList();
  // deleteUser()
  return res.render("user.ejs", { userList });
};

// "INSERT INTO users SET ? ", data
const handleCreateNewUser = (req, res) => {
  const { email, password, username } = req.body;
  createNewUser(email, password, username);
  return res.redirect("/user");
};

const handleDeleteUser = (req, res) => {
  deleteUser(req.params.id);
  return res.redirect("/user");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};

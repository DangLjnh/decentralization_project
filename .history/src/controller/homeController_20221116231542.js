import {
  createNewUser,
  getUserList,
  deleteUser,
  getUserItem,
} from "../service/userService";

const handleHello = (req, res) => {
  const name = "Linh";
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

const handleUpdateUser = async (req, res) => {
  const { id } = req.params;
  const userItemArr = await getUserItem(id);
  const userItem = Object.assign({}, ...userItemArr);
  return res.render("user-update.ejs", { userItem });
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  handleUpdateUser,
};

import { createNewUser, getUserList, deleteUser } from "../service/userService";

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

const handleDeleteUser = () => {};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};

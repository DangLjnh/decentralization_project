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
  // createNewUser(email, password, username);
  // return res.redirect("/user");
  return;
};

const handleDeleteUser = (req, res) => {
  // deleteUser(req.params.id);
  console.log(req.params.id);
  return res.redirect("/user");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};

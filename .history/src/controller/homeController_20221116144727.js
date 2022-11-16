const handleHello = (req, res) => {
  const name = "Linh";
  return res.render("home.ejs", { name });
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  return res.send("Hello create", JSON.stringify(res.data));
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateNewUser,
};

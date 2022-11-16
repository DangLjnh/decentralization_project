const handleHello = (req, res) => {
  const name = "Linh";
  return res.render("home.ejs");
};

module.exports = {
  handleHello,
};

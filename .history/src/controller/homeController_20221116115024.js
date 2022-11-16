const handleHello = (req, res) => {
  return res.render("home.ejs");
};

module.exports = {
  handleHello,
};

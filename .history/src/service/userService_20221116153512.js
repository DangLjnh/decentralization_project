import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, salt); //hash password
  return hashPassword;
};

module.exports = {
  hashPassword,
};

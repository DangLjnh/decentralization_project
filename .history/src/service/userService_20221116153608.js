import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt); //hash password
  return hashPassword;
};

module.exports = {
  hashPassword,
};

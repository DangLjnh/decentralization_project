import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt); //hash password
  return hashPassword;
};

module.exports = {
  hashPassword,
};

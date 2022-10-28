const { UserModel } = require("../database/models");
const ErrorNotFound = require("../errors/ErrorNotFound");
const ErrorUnauthorized = require("../errors/ErrorUnauthorized");
var md5 = require("md5");

const loginService = {
  login: async ({ email, password }) => {
    const { dataValues } = await UserModel.findOne({ where: { email } });
    if (!dataValues) throw new ErrorNotFound("Invalid fields");
    const hashedPassword = md5(password);
    if (hashedPassword !== dataValues.password)
      throw new ErrorUnauthorized("Invalid password");
    delete dataValues.password;
    return dataValues;
  },
};

module.exports = loginService;

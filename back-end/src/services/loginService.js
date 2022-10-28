const md5 = require('md5');
const { UserModel } = require('../database/models');
const ErrorNotFound = require('../api/errors/ErrorNotFound');
const ErrorUnauthorized = require('../api/errors/ErrorUnauthorized');

const loginService = {
  login: async ({ email, password }) => {
    const { dataValues } = await UserModel.findOne({ where: { email } });
    if (!dataValues) throw new ErrorNotFound('Invalid fields');
    const hashedPassword = md5(password);
    if (hashedPassword !== dataValues.password) {
      throw new ErrorUnauthorized('Invalid password');
    }
    delete dataValues.password;
    return dataValues;
  },
};

module.exports = loginService;

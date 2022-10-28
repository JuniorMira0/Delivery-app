const { User } = require('../../database/models');
const ErrorBadRequest = require('../errors/ErrorBadRequest');
const { Op } = require("sequelize")
var md5 = require('md5');

const loginService = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user) throw new ErrorBadRequest('Invalid fields');
    return password;
  },
  create: async (name, email, password ) => {
    const user = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });

    if (user) return false;

    const hashedPassword = md5(password);
    const newUser = await User.create(
      {name, email, password: hashedPassword, role: 'customer'}
    );

    return newUser;
  }
};

module.exports = loginService;

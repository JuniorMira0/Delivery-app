const { loginModel } = require('../../database/models');
const ErrorBadRequest = require('../errors/ErrorBadRequest');

const loginService = {
  login: async ({ email, password }) => {
    const user = await loginModel.findOne({ where: { email } });
    console.log(user);
    if (!user) throw new ErrorBadRequest('Invalid fields');
    return password;
  },
};

module.exports = loginService;

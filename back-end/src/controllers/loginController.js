const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const login = await loginService.login();
    res.status(200).json({ login });
  },
};
module.exports = loginController;

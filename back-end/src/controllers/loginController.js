const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService.login({ email, password });
    res.status(200).json({ login });
  },
};
module.exports = loginController;

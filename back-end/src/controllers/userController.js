const loginService = require('../services/userService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService.login({ email, password });
    res.status(200).json({ ...login });
  },
  create: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await loginService.create(name, email, password);

    if (!user) return res.status(409).json({ message: 'Conflict' });

    return res.status(201).json(user);
  },
};
module.exports = loginController;

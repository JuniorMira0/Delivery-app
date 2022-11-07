const userService = require('../services/userService');

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const login = await userService.login({ email, password });
    res.status(200).json({ ...login });
  },
  create: async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userService.create(name, email, password);

    if (!user) return res.status(409).json({ message: 'Conflict' });

    return res.status(201).json(user);
  },
};
module.exports = userController;

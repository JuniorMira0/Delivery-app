const userSellersService = require('../services/userSellersService');

const userSellersController = {
  getUserSalles: async (_req, res) => {
    const sellers = await userSellersService.getUserSalles();
    return res.status(200).json(sellers);
  },
};
module.exports = userSellersController;

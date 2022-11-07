const userSellersService = require('../services/userSellersService');

const userSellersController = {
  getUserSalles: async (_req, res) => {
    const sellers = await userSellersService.getUserSalles();
    return res.status(200).json(sellers);
  },

  getAllOrders: async (_req, res) => {
    const { user } = res.locals;
    const orders = await userSellersService.getAllOrders(user.id);
    res.status(200).json(orders);
  },

  changeStatus: async (req, res) => {
    const { orderId, status } = req.body;
    const order = await userSellersService.changeStatus({ orderId, status });
    return res.status(200).json(order);
  },
};
module.exports = userSellersController;

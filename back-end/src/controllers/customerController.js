const customerService = require('../services/customerService');

const getAllOrders = async (_req, res) => {
  const { user } = res.locals;
  const orders = await customerService.getAllOrders(user.id);
  res.status(200).json(orders);
};

module.exports = {
  getAllOrders,
};

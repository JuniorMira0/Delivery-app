const customerService = require('../services/customerService');

const createSale = async (req, res) => {
  const saleInfo = req.body;
  const user = req.user;
  const sale = await customerService.createSale(user, saleInfo);

  return res.status(201).json(sale.id);
}

const getAllOrders = async (_req, res) => {
  const { user } = res.locals;
  const orders = await customerService.getAllOrders(user.id);
  res.status(200).json(orders);
};

const getOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await customerService.getOrder(orderId);
  res.status(200).json(order);
};

module.exports = {
  createSale,
  getAllOrders,
  getOrder,
};

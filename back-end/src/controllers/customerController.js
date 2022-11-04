const customerService = require('../services/customerService');

const createSale = async (req, res) => {
  const saleInfo = req.body;
  const user = req.user;
  const sale = await customerService.createSale(user, saleInfo);

  return res.status(201).json(sale.id);
}

const getAllSales = async (_req, res) => res.status(200).json({ message: 'rota customer' });

module.exports = {
  getAllSales,
  createSale
};

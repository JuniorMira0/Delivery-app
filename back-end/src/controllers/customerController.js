// const customerService = require('../services/customerService');

const getAllSales = async (_req, res) => {
  return res.status(200).json({ message: 'rota customer' });
};

module.exports = {
  getAllSales,
};

const { SalesModel } = require('../database/models');
require('express-async-errors');

const getAllSales = async () => {
  const response = await SalesModel.findAll();
  return response;
};

module.exports = {
  getAllSales,
};

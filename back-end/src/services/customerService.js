const { SalesModel } = require('../database/models');
require('express-async-errors');

const getAllOrders = async (userId) => {
  const response = await SalesModel.findAll({
    where: { userId },
  });
  const orders = response.reduce(
    (acc, { id, status, saleDate, totalPrice }) => acc.concat({ id, status, saleDate, totalPrice }),
    [],
  );
  return orders;
};

module.exports = {
  getAllOrders,
};

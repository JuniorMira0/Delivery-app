const { SalesModel, UserModel } = require('../database/models');
require('express-async-errors');

const getAllOrders = async (userId) => {
  const response = await SalesModel.findAll({
    where: { userId },
  });
  const orders = response.reduce(
    (acc, { id, status, saleDate, totalPrice }) =>
      acc.concat({ id, status, saleDate, totalPrice }),
    [],
  );
  return orders;
};

const getOrder = async (orderId) => {
  const response = await SalesModel.findOne({
    where: { id: orderId },
  });
  const { id, status, saleDate, totalPrice, sellerId } = response.dataValues;

  const {
    dataValues: { name: nameSeller },
  } = await UserModel.findOne({
    where: {
      id: sellerId,
    },
  });
  const order = { id, status, saleDate, totalPrice, nameSeller };

  return order;
};

module.exports = {
  getAllOrders,
  getOrder,
};

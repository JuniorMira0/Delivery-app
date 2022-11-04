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
  const { dataValues } = await SalesModel.findOne({
    where: { id: orderId },
  });
  const {
    dataValues: { name: nameSeller },
  } = await UserModel.findOne({
    where: {
      id: dataValues.sellerId,
    },
  });

  delete dataValues.deliveryAddress;
  delete dataValues.deliveryNumber;
  delete dataValues.sellerId;
  delete dataValues.userId;

  return {
    nameSeller,
    ...dataValues,
  };
};

module.exports = {
  getAllOrders,
  getOrder,
};

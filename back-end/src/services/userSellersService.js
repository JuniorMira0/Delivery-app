const { UserModel, SalesModel } = require('../database/models');
require('express-async-errors');

const userSellersService = {
  getUserSalles: async () =>
    UserModel.findAll({
      where: { role: 'seller' },
      attributes: ['id', 'name'],
    }),

  getAllOrders: async (sellerId) => {
  const response = await SalesModel.findAll({
    where: { sellerId },
  });
  const orders = response.reduce(
    (acc, { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) =>
      acc.concat({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }),
    [],
  );
  return orders;
},
  changeStatus: async ({ id, status }) => {
    SalesModel.update(
      {
        status,
      },
      {
        where: {
          id,
        },
      },
    );
  },
};

module.exports = userSellersService;

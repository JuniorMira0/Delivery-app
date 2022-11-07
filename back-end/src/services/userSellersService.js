const { UserModel, SalesModel } = require("../database/models");
const customerService = require("../services/customerService");
require("express-async-errors");

const userSellersService = {
  getUserSalles: async () =>
    UserModel.findAll({
      where: { role: "seller" },
      attributes: ["id", "name"],
    }),

  getAllOrders: async (sellerId) => {
    const response = await SalesModel.findAll({
      where: { sellerId },
    });
    const orders = response.reduce(
      (
        acc,
        { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }
      ) =>
        acc.concat({
          id,
          status,
          saleDate,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
        }),
      []
    );
    return orders;
  },
  changeStatus: async ({ orderId, status }) => {
   await SalesModel.update(
      {
        status,
      },
      {
        where: {
          id: orderId,
        },
      }
   );
    const newOrder = await customerService.getOrder(orderId)
    return newOrder
  },
};

module.exports = userSellersService;

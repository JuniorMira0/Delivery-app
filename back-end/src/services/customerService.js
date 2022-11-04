const { SalesModel, UserModel } = require('../database/models');
require('express-async-errors');

const createSale = async (user, sale) => {
  const seller = await UserModel.findOne({ where: { name: sale.seller } });

  const response = await SalesModel.create({
    userId: user.id,
    sellerId: seller.id,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    status: 'Pendente'
  });
  
  Promise.all(sale.items.map(async (item) => {
    const product = await ProductsModel.findOne({where: { name: item.name }});

    SalesProductsModel.create({
      saleId: response.id,
      productId: product.id,
      quantity: item.quantity,
    })
  }));

  return response;
}

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
  createSale
};

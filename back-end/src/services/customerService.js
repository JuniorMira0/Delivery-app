const {
  SalesModel,
  UserModel,
  SalesProductsModel,
  ProductsModel,
} = require('../database/models');
require('express-async-errors');

const sellerAndProductsSequelize = [
  {
    model: UserModel,
    as: 'seller',
    attributes: ['name'],
  },
  {
    model: ProductsModel,
    as: 'products',
    attributes: ['name', 'price'],
    through: {
      as: 'itemQuantity',
      attributes: ['quantity'],
    },
  },
];

const createSale = async (user, { sales }) => {
  const response = await SalesModel.create({ userId: user.id,
    sellerId: sales.seller,
    totalPrice: sales.totalPrice,
    deliveryAddress: sales.deliveryAddress,
    deliveryNumber: sales.deliveryNumber,
    status: 'Pendente',
  });
  Promise.all(sales.items.map(async (item) => {
      const product = await ProductsModel.findOne({
        where: { name: item.name },
      });
      SalesProductsModel.create({
        saleId: response.id,
        productId: product.id,
        quantity: item.quantity,
      });
    }));
  return response;
};

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

const getAllSalesBySellerId = async (sellerId) => {
  const response = await SalesModel.findAll({
    where: { sellerId },
  });
  const orders = response.reduce(
    (acc, { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) =>
      acc.concat({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }),
    [],
  );
  return orders;
};
    
const getOrder = async (orderId) => {
  const response = await SalesModel.findOne({
    where: { id: orderId },
    attributes: ['id', 'status', 'saleDate', 'totalPrice'],
    include: sellerAndProductsSequelize,
  });
  return response;
};

module.exports = {
  getAllOrders,
  getOrder,
  createSale,
  getAllSalesBySellerId,
};

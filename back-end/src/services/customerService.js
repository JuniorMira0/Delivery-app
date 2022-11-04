const { SalesModel, UserModel, SalesProductsModel, ProductsModel } = require('../database/models');
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

const getAllSales = async () => {
  const response = await SalesModel.findAll();
  return response;
};

module.exports = {
  getAllSales,
  createSale
};

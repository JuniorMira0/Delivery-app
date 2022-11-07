const { UserModel } = require('../database/models');
require('express-async-errors');

const userSellersService = {
  getUserSalles: async () =>
    UserModel.findAll({
      where: { role: 'seller' },
      attributes: ['id', 'name'],
    }),
};

module.exports = userSellersService;

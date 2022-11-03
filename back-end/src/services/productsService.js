const { ProductsModel } = require('../database/models');
const ErrorNotFound = require('../errors/ErrorNotFound');
require('express-async-errors');

const getAll = async () => {
  const response = await ProductsModel.findAll();

  return response;
};

const getById = async (id) => {
  const response = await ProductsModel.findOne({ where: { id } });

  if (!response) throw new ErrorNotFound('Product does not exist');

  return response;
};

module.exports = {
  getAll,
  getById,
};

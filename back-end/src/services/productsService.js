const { Product } = require("../database/models");
const ErrorNotFound = require("../errors/ErrorNotFound");
require("express-async-errors");

const getAll = async () => {
  const response = await Product.findAll();

  return response;
};

const getById = async (id) => {
  const response = await Product.findOne({ where: { id } });

  if (!response) throw new ErrorNotFound("Product does not exist");

  return response;
};

module.exports = {
  getAll,
  getById,
};

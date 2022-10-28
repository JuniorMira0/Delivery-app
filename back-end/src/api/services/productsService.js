const { Product } = require('../../database/models');

const getAll = async () => {
  const response = await Product.findAll();

  return { statusCode: 200, result: response };
};

const getById = async (id) => {
  const response = await Product.findOne({ where: { id } });

  if (!response) { return { statusCode: 404, result: { message: 'Product does not exist' } }; }

  return { statusCode: 200, result: response };
};

module.exports = {
  getAll,
  getById,
};

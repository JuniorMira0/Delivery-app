const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const { statusCode, result } = await productsService.getAll();
  console.log(result);

  return res.status(statusCode).json(result);
};

const getById = async (req, res) => {
  const { statusCode, result } = await productsService.getById(req.params.id);

  return res.status(statusCode).json(result);
};

module.exports = {
  getAll,
  getById,
};

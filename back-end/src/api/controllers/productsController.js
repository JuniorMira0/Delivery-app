const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await productsService.getById(req.params.id);

  return res.status(200).json(result);
};

const getImage = async (req, res) => { 
  const { image } = req.params;
  return res.status(200).json(image);
};

module.exports = {
  getAll,
  getById,
  getImage,
};

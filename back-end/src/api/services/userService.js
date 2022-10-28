const { Op } = require('sequelize');
const md5 = require('md5');
const { UserModel } = require('../../database/models');
const ErrorNotFound = require('../errors/ErrorNotFound');
const ErrorUnauthorized = require('../errors/ErrorUnauthorized');
const generateToken = require('../utils/generateToken');
require('express-async-errors');

const loginService = {
  login: async ({ email, password }) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) throw new ErrorNotFound('Invalid fields');
    const hashedPassword = md5(password);
    if (hashedPassword !== user.dataValues.password) {
      throw new ErrorUnauthorized('Invalid password');
    }
    delete user.dataValues.password;
    delete user.dataValues.id;
    const token = await generateToken(email);
    return { ...user.dataValues, token };
  },
  create: async (name, email, password) => {
    const user = await UserModel.findOne({
      where: { [Op.or]: [{ name }, { email }] },
    });

    if (user) return false;

    const hashedPassword = md5(password);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: 'customer',
    });

    return newUser;
  },
};

module.exports = loginService;

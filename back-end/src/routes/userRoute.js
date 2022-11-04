const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();
router.get('/usersalles', userController.getUserSalles);
router.post('/', userController.login);

module.exports = router;

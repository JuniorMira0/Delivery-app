const { Router } = require('express');
const loginController = require("../controllers/userController");

const router = Router();

router.post('/', loginController.login);

module.exports = router;

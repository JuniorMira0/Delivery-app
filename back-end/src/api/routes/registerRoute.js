const { Router } = require('express');
const loginController = require("../controllers/userController");

const router = Router();

router.post('/', loginController.create);

module.exports = router;

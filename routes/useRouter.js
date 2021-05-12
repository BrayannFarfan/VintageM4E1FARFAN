const express = require('express');
const controllerProduct = require('../controller/productController');
const router = express.Router();
const userController = require('../controller/useController');

router.get('/register',userController.register);

router.get('/login', userController.login);

module.exports = router;
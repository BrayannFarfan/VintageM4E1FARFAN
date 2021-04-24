const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');


router.get('/', controladorHome.leerTodos);
module.exports = router;
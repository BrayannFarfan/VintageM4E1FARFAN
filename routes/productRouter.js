const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/productController');

router.get('/', controllerProduct.leerTodos);
router.get('/cart', controllerProduct.cart);
router.get('/create', controllerProduct.create);
router.get('/:id', controllerProduct.detail);
router.get('/search', controllerProduct.search);
router.get('/:id/edit', controllerProduct.edit);
router.post('/store', controllerProduct.store);
router.put('/:id',controllerProduct .update);
router.delete('/:id', controllerProduct.destroy);
module.exports = router;

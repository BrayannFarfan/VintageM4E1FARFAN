const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/productController');

const logDbMiddleware = require('../middlewares/logDbMiddleware')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, path.resolve(__dirname, '../public/images'))},
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/', controllerProduct.leerTodos);
router.get('/cart', controllerProduct.cart);
router.get('/create', controllerProduct.create);
router.get('/:id', controllerProduct.show);
router.get('/search', controllerProduct.search);
router.get('/:id/edit', controllerProduct.edit);
router.post('/store',upload.single('image'), controllerProduct.store);
router.put('/:id',upload.single('image'),controllerProduct .update);
router.delete('/:id', controllerProduct.destroy);


module.exports = router;

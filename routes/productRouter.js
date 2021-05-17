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


const {body} = require('express-validator');

const upload = multer({ storage });

const validaciones = [
   
    body('name').notEmpty().withMessage('En nombre no puede estar en blanco').bail()
    
    .isString().withMessage('Deber ser un String'),

    body('price').notEmpty().withMessage('En precio no puede estar en blanco'),
    body('descuento').notEmpty().withMessage('En descuento no puede estar en blanco'),
  
    body('image').custom((value, {req}) => {
     let file = req.file
     if ( !file) {
        throw new Error('Debe agregar una foto');
      }

     return true

    })
] 





router.get('/', controllerProduct.leerTodos);
router.get('/cart', controllerProduct.cart);
router.get('/create', controllerProduct.create);
router.get('/:id', controllerProduct.show);
router.get('/search', controllerProduct.search);
router.get('/:id/edit', controllerProduct.edit);
router.post('/store',upload.single('image'), validaciones,controllerProduct.store);
router.put('/:id',upload.single('image'),controllerProduct .update);
router.delete('/:id', controllerProduct.destroy);


module.exports = router;

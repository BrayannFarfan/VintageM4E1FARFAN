const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/productController');

router.get('/', controllerProduct.leerTodos);
router.get('/create', controllerProduct.create);
router.get('/:id', controllerProduct.detail);
router.get('/:id/edit', controllerProduct.edit);
router.post('/', (req, res) => {
    req.send('recibo datos del formulario de creacion')
    //res.send(req.body)
});
router.put('/', (req, res) => {
    res.send('recibir datos del fomulario de edicion ');
});
router.delete('/:id', (req, res) => {
    res.send("Borra producto")
})
module.exports = router;

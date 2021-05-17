

const jsonDB = require('../model/jsonDatabase');

const productModel = jsonDB('products');

const {validationResult}  = require('express-validator');

let controllerProduct ={
    leerTodos : (req, res)=>{
        res.render('home', {products});
    },
    show: (req, res) => {
        const product = productModel.find(req.params.id);
        if (product) {
            res.render('detailProduct', { product });
        } else {
            res.render('error404');
        }
    },
    create: (req, res) => {
        res.render('create');
    },
    store: (req, res) => {
        const errores = validationResult(req);
        if(errores.errors.length > 0){
            return res.render('create', {
                erroresControlados : errores.mapped(),
                camposDevueltos: req.body
        });
    }

        const product = req.body;
        product.image = req.file.filename

        productModel.create(product)
        res.redirect('/')
    
    },
    edit: (req, res) => {
        let product = productModel.find(req.params.id);
        if (product) {
            res.render('editProduct');
        } else {
            res.render('error404');
        }
    },
    update: (req, res) => {
        let product = req.body;
        if (req.file===undefined) {
            product.image = req.body.oldImage
        } else {
            product.image = req.file.filename 
        }

        delete product.oldImage;
        product.id = req.params.id;
        productModel.update(product);
        res.redirect('/')
    },
    destroy: (req, res) => {
        productModel.delete(req.params.id);
        res.redirect('/')
    },
    cart: (req, res) => {
        res.render('products/cart');
    },
    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }
}

module.exports = controllerProduct;
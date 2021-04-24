let visitados = require('../data/datosProfuctos');

let controllerProduct ={
    leerTodos : (req, res)=>{
        let products = [...visitados]
        res.render('home', {products});
    },
    detail: (req, res) => {
        let product = visitados.find(function (i) {
            return i.id === req.params.id
        })
        if (product) {
            res.render('productDetail', { product });
        }
    },
    create: (req, res) => {
        res.render('create');
    },
    store: (req, res) => {
        let producto =
        {
            id: "5",
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: "images/img-cafetera-moulinex.jpg"
        }
        visitados.push(producto)
      
        res.redirect('/')
    },
    edit: (req, res) => {
        let product = visitados.find(function (i) {
            return i.id === req.params.id
        })
        if (product) {
            res.render('editProduct', { product });
        } 
    },
    update: (req, res) => {
        let producto = {
            id: req.params.id,
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: req.body.image

        }
        visitados.forEach(function (i) {
            if (i.id === req.params.id) {
                i.name = producto.name
                i.price = producto.price
                i.descuento = producto.descuento
            }
        })
        res.redirect('/')
    },
    destroy: (req, res) => {
        let menorArray = visitados.filter(function (value) {
            return value.id !== req.params.id
        })    
        visitados = [...menorArray]     
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
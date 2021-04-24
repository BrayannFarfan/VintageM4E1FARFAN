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
        } else {
            res.render('error404');
        }
    },
    create: (req, res) => {
        res.render('create');
    },
    store: (req, res) => {
        let producto =
        {
            id: "11",
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
        } else {
            res.render('error404');
        }
    }
}

module.exports = controllerProduct;
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
        console.log('entre a crear')
        res.render('createProduct');
    },
}

module.exports = controllerProduct;
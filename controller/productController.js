let visitados = require('../data/datosProfuctos');

let controllerProduct ={
    leerTodos : (req, res)=>{
        let products = [...visitados]
        res.render('home', {products});
    },
    detail: (req, res) => {
        let product = visitados.find(function (i) {
            console.log('me encoraron:' + i.id)
            return i.id === req.params.id
        })
        if (product) {
            res.render('productDetail', { product });
        } else {
            res.render('error404');
        }
    } 
}

module.exports = controllerProduct;
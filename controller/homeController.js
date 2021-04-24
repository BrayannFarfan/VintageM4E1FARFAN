let visitados = require('../data/datosProfuctos');
let homeController ={
    leerTodos: (req, res) =>{
        const products = [...visitados]
        res.render('home', {products});
    }
}

module.exports = homeController;
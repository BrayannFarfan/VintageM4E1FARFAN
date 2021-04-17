let visitados = require('../data/datosProfuctos');

let homeController ={
    leerTodos : function(){
        return visitados
    }
}


module.exports = homeController;